document.getElementById('next').onclick = function() {
   let lists = document.querySelectorAll('.items-sp');
   document.getElementById('slide-SP').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.items-sp');
    document.getElementById('slide-SP').prepend(lists[lists.length - 1]);
}
document.getElementById('xuong').onclick = function() {
    let lists = document.querySelectorAll('.items-newproduct');
    document.getElementById('slide-product').appendChild(lists[0]);
 }
 document.getElementById('len').onclick = function() {
     let lists = document.querySelectorAll('.items-newproduct');
     document.getElementById('slide-product').prepend(lists[lists.length - 1]);
 }
 document.getElementById('left').onclick = function() {
    let lists = document.querySelectorAll('.items-old');
    document.getElementById('slide-old').appendChild(lists[0]);
 }
 document.getElementById('right').onclick = function() {
     let lists = document.querySelectorAll('.items-old');
     document.getElementById('slide-old').prepend(lists[lists.length - 1]);
 }
 document.getElementById('turndown').onclick = function() {
    let lists = document.querySelectorAll('.items-ykien');
    document.getElementById('slide-ykien').appendChild(lists[0]);
 }
 document.getElementById('turnup').onclick = function() {
     let lists = document.querySelectorAll('.items-ykien');
     document.getElementById('slide-ykien').prepend(lists[lists.length - 1]);
 }