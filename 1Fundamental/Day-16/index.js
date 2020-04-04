let a = {
    nama: 'Nama',
    tahun: '2020',
    pekerjaan: 'Developer'
}

console.log({...a})


let defaultVal = {
    username: '',
    email: '',
    password: '',
}

const onChangeText = (key,value) => {
    defaultVal = {
        ...defaultVal,
        [key]:value
    }
}

onChangeText('username','theo')
onChangeText('email','theotheo@gmail.com')
onChangeText('password', 'asd')
console.log(defaultVal)