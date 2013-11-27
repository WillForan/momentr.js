// initialize our faux database
var data = {
   "imgs": [
   {
      "title": "First Picture",
      "hash": "aaaaaa",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   },
   {
      "title": "Second Picture",
      "hash": "bbbb",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   },
   ]
};

exports.imgs = function (req, res) {
   var imgs = [];
   data.imgs.forEach(function (img, i) {
         imgs.push({
          id: i,
          title: img.title,
          desc: img.text.substr(0, 50) + '...'
     });
   });

  res.json({ imgs: imgs });

};


exports.imgs = function (req, res) {
   var id = req.parsm.id;
   if(id>=0&&id<data.imgs.length){
    res.json({imgs: data.imgs[id]});
   }else{
    res.json(false);
   }
};
