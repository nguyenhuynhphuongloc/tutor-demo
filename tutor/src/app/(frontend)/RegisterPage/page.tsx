'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterForm() {
    const router = useRouter()
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setMessage('Đang đăng ký...')

        try {
            const res = await fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            const data = await res.json()
            if (res.ok) {
                alert('Đăng ký thành công! 🎉')
                router.push('/LoginPage')
            } else {
                setMessage(`Lỗi: ${data.message ?? 'Có lỗi xảy ra'}`)
            }
        } catch (err) {
            console.error(err)
            setMessage('Lỗi mạng hoặc server')
        }
    }

    return (
        <div className="bg-white h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="max-w-md w-full p-6 space-y-4 border rounded shadow"
            >
                <h2 className="text-2xl font-bold text-center text-black">Đăng ký tài khoản</h2>

                <input
                    type="text"
                    placeholder="Họ và tên"
                    className="border p-2 w-full rounded text-black placeholder-gray-600"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full rounded text-black placeholder-gray-600"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="border p-2 w-full rounded text-black placeholder-gray-600"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full transition"
                    type="submit"
                >
                    Đăng ký
                </button>

                {message && <p className="text-black text-center">{message}</p>}

                {/* 👉 Phần điều hướng sang trang đăng nhập */}
                <p className="text-center text-gray-700 mt-4">
                    Đã có tài khoản?{" "}
                    <span
                        className="text-blue-700 font-semibold hover:underline cursor-pointer"
                        onClick={() => router.push('/LoginPage')}
                    >
                        Đăng nhập ngay
                    </span>
                </p>
            </form>
        </div>
    )
}
