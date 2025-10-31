'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginForm() {
    const router = useRouter()
    const [form, setForm] = useState({ email: '', password: '' })
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setMessage('Đang đăng nhập...')

        try {
            const res = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
                credentials: 'include',
            })

            const data = await res.json()

            if (res.ok) {
                alert('Đăng nhập thành công! 🎉')
                router.push('/LibraryPage   ')
                console.log('Cookie HttpOnly đã được lưu trong trình duyệt (JS không thể đọc).')
            } else {
                setMessage(`Lỗi: ${data.message ?? 'Có lỗi'}`)
            }
        } catch (err) {
            console.error(err)
            setMessage('Lỗi mạng hoặc server')
        }
    }

    return (
        <div className="bg-white h-screen flex items-center justify-center">
            
            <form className="max-w-md w-full p-6 space-y-4 border rounded shadow" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center text-black">Đăng nhập</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full rounded text-black"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="border p-2 w-full rounded text-black"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded w-full">
                    Đăng nhập
                </button>

                {message && <p className="text-black mt-2 text-center">{message}</p>}

                
                <p className="text-center text-gray-700 mt-4">
                    Chưa có tài khoản?{" "}
                    <span
                        className="text-red-700 font-semibold hover:underline cursor-pointer"
                        onClick={() => router.push('/RegisterPage')}
                    >
                        Đăng ký ngay
                    </span>
                </p>
            </form>
        </div>
    )
}
