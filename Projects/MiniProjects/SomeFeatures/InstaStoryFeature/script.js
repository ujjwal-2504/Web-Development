let arr = [

  {dp: "https://images.unsplash.com/photo-1720949763536-b6ebae9f38b5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  story: "https://images.unsplash.com/photo-1726251903562-4af66fc61634?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

  {dp: "https://images.unsplash.com/photo-1727964804263-749b020ddc33?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  story: "https://images.unsplash.com/photo-1716428325370-c3f667316f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

  {dp: "https://images.unsplash.com/photo-1713017914976-391de2f99ec2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  story: "https://images.unsplash.com/photo-1713017875217-7b27b72dfa8f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

  {dp: "https://images.unsplash.com/photo-1694215685811-62b2972e3f68?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  story: "https://images.unsplash.com/photo-1669670201597-135315c99930?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

  {dp: "https://images.unsplash.com/photo-1612233889694-7b744decda5f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  story: "https://images.unsplash.com/photo-1574099852746-7cab5a2495d6?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

let clutter = "";

arr.forEach(function(elem, idx) {

  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`
});

let stories = document.querySelector('.stories');

stories.innerHTML = clutter;

stories.addEventListener('click', function(dets) {
  
  let storyLink = arr[dets.target.id].story;

  let fullScreen = document.querySelector("#full-screen");
  let time = document.querySelector('#time');

  fullScreen.style.display = "block";
  time.style.display = "flex";
  fullScreen.style.backgroundImage = `url(${storyLink})`;
  
  setTimeout(function() {
    fullScreen.style.display = "none";
    time.style.display = "none";
  }, 3000);
});