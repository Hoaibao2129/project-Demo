

const user =[
    {
        id : 1 ,
        name : 'Hoài Bảo',
        birthday : '21-09-2001',
        address : 'Quảng nam'
    },
    {
        id: 2 ,
        name : 'Văn A',
        birthday : '21-4-2023',
        address : 'Điện Bàn',
    },
    {
        id : 3 ,
        name : 'Thị C',
        birthday : '20-03-2001',
        address : 'Đà Nẵng'
    },
    {
        id : 4 ,
        name : 'Văn D',
        birthday : '22-2-2022',
        address : 'Huế'
    },
    {
        id : 5 ,
        name : 'Thị F',
        birthday : '02-02-2002',
        address : 'Quảng Trị'
    },
];

// filter : Loop qua tất cả các phần tử có trong ARR trả về tất cả phần tử thoả mãn điều kiện

const users = user.filter(item =>{
    return item.address === 'Đà Nẵng' || item.address === 'Quảng nam';
})



// find : Loop qua tất cả các phần tử có trong ARR trả về 1 phần tử đầu tiên thoả mãn điều kiện và dừng


const findUser = user.find(item =>{
    return item.address === 'Đà Nẵng' || item.address === 'Quảng nam';
})


// map : loop qua tất cả các phần tử trong ARR để lấy ra các phần tử mong muốn hoặc thay đổi các phần tử

// const mapUser = user.map(item =>{
//    return {
//     ...item,
//     job : 'DEVELOPER'
//    }
// })


// some : Loop qua 1 ARR để kiểm tra xem có item nào trong arr thoả mãn điều kiện hay không và trả về giá trị true false

// every :

// reduce : nhận vào 2 tham số  1 là callback 2 là giá trị khởi tạo ARR or Object 
            
        // + Callback nhận vào 2 tham số  1 là accumulate(giá trị tích luỹ) 2 là cur(là vị trị đang loop qua)

const reduceUser = user.reduce((acc , cur)=> {
    return {...acc , [cur.name] : cur }
}, {})

