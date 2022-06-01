const username = document.getElementById('username')
const password = document.getElementById('password')
const loginBtn = document.querySelector('form .submit')

const username_pattern = /^[a-z0-9_-]{3,16}$/
const password_pattern = /^[A-Za-z0-9_\.]{6,32}$/

const username_error = document.querySelector('.username_error')
const password_error = document.querySelector('.password_error')

loginBtn.addEventListener('click',(event) => { 
    let error =[]
    let value_username = username.value
    let value_password = password.value
    
    if (value_username.length == 0){
        error.push('username')
        username_error.style.display = 'blook'
        username_error.textContent = 'Bạn chưa nhập tài khoản'
        }else{
            if (!value_username.match(username_pattern)){
                error.push('username')
                username_error.style.display = 'blook'
                username_error.textContent = 'Tài khoản không đúng định dạng'
                }else{
                    delete error['username']
                    username_error.style.display = 'none'
                }
        }

        if (value_password.length == 0){
            error.push('password')
            password_error.style.display = 'blook'
            password_error.textContent = 'Bạn chưa nhập mật khẩu'
            }else{
                if (!value_password.match(password_pattern)){
                    error.push('password')
                    password_error.style.display = 'blook'
                    password_error.textContent = 'Mật khẩu không đúng định dạng'
                    }else{
                        delete error['password']
                        password_error.style.display = 'none'
                    }
            }

   if(error.length ===0){
       loginBtn.textContent = 'Đang đằng nhập ...'
       loginBtn.style.background='#1d257d'
       event.preventDefault()
   }else{
       event.preventDefault()
   }
})