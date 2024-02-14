/** @module Login-Script */
/**
* Deklarasi variabel untuk setiap elemen View
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
/** 
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');
/** 
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Deklarasi Variabel yang menyimpan alamat Email & Password
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Comment : Bagian dari Button Submit */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Deklarasi variabel email dan Password untuk mendapatkan nilai input pengguna
  * @constant {string}
  */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* Comment : percabangan untuk memastikan apakah Nilai email sudah sesuai dengan yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment : jika sesuai maka akan pergi ke halaman Home */
    goToHome();
  /* Comment : selain itu jika tidak sesuai maka akan diberikan popup error */ 
  } else {
    showPopUp();
  }
});
