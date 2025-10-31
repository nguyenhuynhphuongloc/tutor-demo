import { PayloadHandler } from 'payload'

export const register: PayloadHandler = async (req) => {

  
  const { name, email, password } = ((await req.json?.()) ?? {}) as {
    name?: string
    email?: string
    password?: string
  }

  if (!name || !email || !password) {
    return Response.json({ message: 'Thiếu thông tin đăng ký' }, { status: 400 })
  }
  console.log('Registering user:', { name, email ,password})
  try {
    const user = await req.payload.create({

      collection: 'users',

      data: {

        name,

        email,

        password, 

        role: 'customer', 

      },

    })

    return Response.json({

      message: 'Đăng ký thành công!',

      user,
    })
  } catch (err) {

    console.error(err)

    return Response.json({ message: 'Lỗi khi đăng ký' }, { status: 500 })

  }
}
