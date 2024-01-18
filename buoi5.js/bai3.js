function kt(){
while(true){
let doan=prompt("Hãy Đoán Xem")
let sotrungthuong=Math.round(Math.random() *11)
    if(parseInt(sotrungthuong)==doan){
        alert("Chúc mừng")
        break
    }
    else{
        alert("Yêu cầu nhập lại")
    }
}
}
kt()
document.write(sotrungthuong);
