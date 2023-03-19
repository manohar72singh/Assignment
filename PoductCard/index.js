var productList =[];
var badgeList = ["NEW","TRANDING","BEST SELLER", "TOP BRANDS", "BEST DEELS"];
var template = Handlebars.compile(document.querySelector("#tempCard").innerHTML);
var url ="https://fakestoreapi.com/products/";

var randomPic =(list)=>{
    var pick = Math.floor(Math.random()* list.length);
    var item = list[pick]
    return item;
}

(()=>{
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        productList = data;
        productList.forEach((pdata, index)=>{
            var badge = randomPic(badgeList);
            pdata.badge = badge
            pdata.title = pdata.title.substring(0,25)+'...';
            pdata.description = pdata.description.substring(0,50)+'...';
            $(".product_container").append(template(pdata));
        })
    })
})();
