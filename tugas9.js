const temanObject=()=>{
    var buku ={
        judul : "Atomic Habit",
        penulis : "James Clear",
        tahun:2018,
    }
    for(var x in buku){
        console.log(buku[x])
    }
}
temanObject()