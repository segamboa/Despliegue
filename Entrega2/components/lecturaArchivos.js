//Lectura

export default function request (url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.responseText);
      } else {
        reject(req.responseText);
      }
    };
    req.send();
  });
};

