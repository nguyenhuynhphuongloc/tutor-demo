import { PayloadHandler } from 'payload'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login: PayloadHandler = async (req) => {
  try {
    const { email, password } = ((await req.json?.()) ?? {}) as {
      email?: string
      password?: string
    }

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Thiếu email hoặc mật khẩu' }), { status: 400 })
    }


    const user = await req.payload.find({
      collection: 'users',
      where: { email: { equals: email } },
    })

    if (!user?.docs?.length) {
      return new Response(JSON.stringify({ message: 'Email không tồn tại' }), { status: 400 })
    }

    const foundUser = user.docs[0]

 
    const match = await bcrypt.compare(password, foundUser.password ?? '')
    if (!match) {
      return new Response(JSON.stringify({ message: 'Sai mật khẩu' }), { status: 401 })
    }


    const token = jwt.sign(
      { id: foundUser.id, email: foundUser.email, role: foundUser.role },
      process.env.JWT_SECRET || 'secret_key',
      { expiresIn: '7d' }
    )


    const headers = new Headers()
    headers.append(
      'Set-Cookie',
      `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${7 * 24 * 60 * 60}`
    )
    headers.append('Content-Type', 'application/json')

    return new Response(JSON.stringify({ message: 'Đăng nhập thành công!' }), {
      status: 200,
      headers,
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ message: 'Lỗi server' }), { status: 500 })
  }
}
