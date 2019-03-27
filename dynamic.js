function loadJson(file,callback){
  var fr=new XMLHttpRequest();
  fr.overrideMimeType("application/json");
  fr.open("GET",file,true);
  fr.onreadystatechange=function()
  {
    if (fr.readyState=== 4 && fr.status=="200") {
      callback(fr.responseText);

}
}
fr.send();
}
loadJson("data.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  Education(data.education);
  skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p)
{
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);

var h3=document.createElement("h3");
h3.textContent=p.designation;
left.append(h3);

var h4=document.createElement("h4");
h4.textContent=p.email;
left.append(h4);

var h5=document.createElement("h5");
h5.textContent=p.phoneno;
left.append(h5);
}
var right=document.querySelector(".right");
function career(ca)
{
  var h1=document.createElement("h1");
  h1.textContent="career objective";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var p=document.createElement("p");
  p.textContent=ca.info;
  right.append(p);
}
function Education(ed)
{
var h1 =document.createElement("h1");
h1.textContent=" education";
right.append(h1);
var hr=document.createElement("hr");
right.append(hr);
var table=document.createElement("table");

var tr1="<tr><th>qualification</th><th>insitute</th><th>year</th><th>percent</th></tr>";
var tr2=" ";
for(var i in ed){
  tr2=tr2+"<tr><td>"+ed[i].qualification+"</td><td>"+ed[i].institute+"</td><td>"+ed[i].year+"</td><td>"+ed[i].percent+"</td></tr>";

}
table.innerHTML=tr1+tr2;
right.append(table);
}
function skills(s)
{
  var rr=document.createElement("h2");
  rr.textContent="skills";
  right.append(rr);
  var hr=document.createElement("hr");
  right.append(hr);

  var ul=document.createElement("ul");
  for(var i in s)
  {
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
    ul.append(li);
  }
  right.append(ul);
}
