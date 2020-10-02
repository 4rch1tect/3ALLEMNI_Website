function compare(ch1, ch2) {
  return ch1 == ch2;
}

function verifLength(ch, n) {
  return ch.length >= n;
}

function verifNumber(ch) {
  return isNaN(ch);
}

function checkIfEmailExist(email) {
  var i = 0;
  var T = JSON.parse(localStorage.getItem("usersJ") || "[]");

  while (i < T.length && T[i].email != email) {
    i++;
  }
  if (i == T.length) {
    return false;
  } else {
    return T[i].email == email;
  }
}

function login() {
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;
  var i = 0;
  var T = JSON.parse(localStorage.getItem("usersJ") || "[]");
  while (i < T.length && (T[i].email != email || T[i].pwd != pwd)) {
    i++;
  }
  if (i == T.length) {
    return null;
  } else {
    if (T[i].userType == "0") {
      localStorage.setItem("usersJ", JSON.stringify(T[i]));
      alert("Welcome, You're connected as an admin");
    } else {
      localStorage.setItem("usersJ", JSON.stringify(T[i]));
      alert("Welcome, You're connected as a simple user");
    }
    return T[i];
  }

}

function signUp() {
  var firstName = document.getElementById("firstName").value;
  var checkLengthFirstName = verifLength(firstName, 3);
  if (!checkLengthFirstName) {
    document.getElementById("firstNameMsg").innerHTML =
      "First Name must have at least 3 characters";
  } else {
    document.getElementById("firstNameMsg").innerHTML = "";
  }
  var lastName = document.getElementById("lastName").value;
  var checkLengthLastName = verifLength(lastName, 3);
  if (!checkLengthLastName) {
    document.getElementById("lastNameMsg").innerHTML =
      "Last Name must have at least 3 characters";
  } else {
    document.getElementById("lastNameMsg").innerHTML = "";
  }
  var email = document.getElementById("email").value;
  var verifEmail = checkIfEmailExist(email);
  var password = document.getElementById("pwd").value;
  var checkPwd = verifLength(password, 8);
  if (!checkPwd) {
    document.getElementById("pwdMsg").innerHTML =
      "Password must have at least 8 characters";
  } else {
    document.getElementById("pwdMsg").innerHTML = "";
  }
  var confirmPassword = document.getElementById("confirmPwd").value;
  var checkPwdConfirmPwd = compare(password, confirmPassword);
  if (!checkPwdConfirmPwd) {
    document.getElementById("confirmPwdMsg").innerHTML =
      "Confirm Password does not much with password";
  } else {
    document.getElementById("confirmPwdMsg").innerHTML = "";
  }
  var telNbr = document.getElementById("tel").value;
  var checkIfNumber = verifNumber(telNbr);
  if (checkIfNumber) {
    document.getElementById("telMsg").innerHTML = "Tel number is not correct";
  } else {
    document.getElementById("telMsg").innerHTML = "";
  }

  var userType = document.getElementById("userType").value;
  var idU = localStorage.getItem("idU") || "1";

  // JSON Object
  var user = {
    id: Number(idU),
    fName: firstName,
    lName: lastName,
    email: email,
    pwd: password,
    confirmPwd: confirmPassword,
    tel: telNbr,
    userType: userType,
  };

  if (
    checkLengthFirstName &&
    checkLengthLastName &&
    checkPwdConfirmPwd &&
    !checkIfNumber &&
    checkPwd &&
    !verifEmail
  ) {
    var T = JSON.parse(localStorage.getItem("usersJ") || "[]");
    T.push(user);
    localStorage.setItem("usersJ", JSON.stringify(T));
    localStorage.setItem("idU", Number(idU) + 1);
  }
}

function calculReponseshis() {
  var rc = 0;
  if (document.getElementById('3').checked) {
    rc++;
  } else {
    document.getElementById("msg1").innerHTML = "1- The invasion of Poland triggered France and Britain to declare war against Germany";
  }
  if (document.getElementById('6').checked) {
    rc++;
  } else {
    document.getElementById("msg2").innerHTML = "2- The D-Day landings were in Normandy";
  }
  if (document.getElementById('12').checked) {
    rc++;
  } else {
    document.getElementById("msg3").innerHTML = "3- At the beginning of world war 1 Bosnia-Herzegovina was part of Austria-Hungary";
  }
  if (document.getElementById('15').checked) {
    rc++;
  } else {
    document.getElementById("msg4").innerHTML = "4- The unification of the german empire was in 1871";
  }
  if (document.getElementById('17').checked) {
    rc++;
  } else {
    document.getElementById("msg5").innerHTML = "5- Mahatma Gandhi died in 1948";
  }
  if (document.getElementById('24').checked) {
    rc++;
  } else {
    document.getElementById("msg6").innerHTML = "6- The first european who discovered the north american continent is Leif Erikson";
  }
  if (document.getElementById('26').checked) {
    rc++;
  } else {
    document.getElementById("msg7").innerHTML = "7- The founder of the mongol empire is Genghis Khan";
  }
  if (document.getElementById('31').checked) {
    rc++;
  } else {
    document.getElementById("msg8").innerHTML = "8- The inventor of the telephone is Alexander Graham Bell";
  }
  if (document.getElementById('36').checked) {
    rc++;
  } else {
    document.getElementById("msg9").innerHTML = "9- The inventor of the first computing device is Charles Babbage";
  }
  if (document.getElementById('37').checked) {
    rc++;
  } else {
    document.getElementById("msg10").innerHTML = "10- The first person who went to space is Yuri Gagarin";
  }
  if (document.getElementById('44').checked) {
    rc++;
  } else {
    document.getElementById("msg11").innerHTML = "11- Hannibal crossed the alps in 218 BC";
  }
  if (document.getElementById('46').checked) {
    rc++;
  } else {
    document.getElementById("msg12").innerHTML = "12- The Republic of Yugoslavia dissolved in 1992";
  }
  if (document.getElementById('49').checked) {
    rc++;
  } else {
    document.getElementById("msg13").innerHTML = "13- Queen Elizabeth 2 become queen at the age of 27";
  }
  if (document.getElementById('55').checked) {
    rc++;
  } else {
    document.getElementById("msg14").innerHTML = "14- Amr Ibn Al-Aas led muslim forces during conquest of Egypt";
  }
  if (document.getElementById('58').checked) {
    rc++;
  } else {
    document.getElementById("msg15").innerHTML = "15- Omar Al-Mukhtar was called lion of the desert";
  }
  if (document.getElementById('63').checked) {
    rc++;
  } else {
    document.getElementById("msg16").innerHTML = "16- Alfred Nobel invented the dynamite";
  }
  if (document.getElementById('68').checked) {
    rc++;
  } else {
    document.getElementById("msg17").innerHTML = "17- Che Guevara was born in Argentina";
  }
  if (document.getElementById('70').checked) {
    rc++;
  } else {
    document.getElementById("msg18").innerHTML = "18- John F.Kennedy was killed in 1963";
  }
  if (document.getElementById('76').checked) {
    rc++;
  } else {
    document.getElementById("msg19").innerHTML = "19- Ruhallah Khumaini led Iran after the islamic revolution";
  }
  if (document.getElementById('78').checked) {
    rc++;
  } else {
    document.getElementById("msg20").innerHTML = "20- The vikings come originally from Scandinavia";
  }
  document.getElementById('results').innerHTML = rc;
  if (rc == 20) {
    document.getElementById("rq1").innerHTML = "MIND-BLOWING !";
  }
  if ((rc >= 15) && (rc < 20)) {
    document.getElementById("rq2").innerHTML = "EXCELLENT !";
  }
  if ((rc >= 10) && (rc < 15)) {
    document.getElementById("rq3").innerHTML = "VERY GOOD ";
  }
  if ((rc >= 5) && (rc < 10)) {
    document.getElementById("rq4").innerHTML = "GOOD !";
  }
  if ((rc >= 0) && (rc < 5)) {
    document.getElementById("rq5").innerHTML = "GOOD LUCK NEXT TIME !";
  }

}

function calculReponsesgeo() {
  var rc2 = 0;
  if (document.getElementById('03').checked) {
    rc2++;
  } else {
    document.getElementById("msg01").innerHTML = "1- The invasion of Poland triggered France and Britain to declare war against Germany";
  }
  if (document.getElementById('06').checked) {
    rc2++;
  } else {
    document.getElementById("msg02").innerHTML = "2- The D-Day landings were in Normandy";
  }
  if (document.getElementById('012').checked) {
    rc2++;
  } else {
    document.getElementById("msg03").innerHTML = "3- At the beginning of world war 1 Bosnia-Herzegovina was part of Austria-Hungary";
  }
  if (document.getElementById('015').checked) {
    rc2++;
  } else {
    document.getElementById("msg04").innerHTML = "4- The unification of the german empire was in 1871";
  }
  if (document.getElementById('017').checked) {
    rc2++;
  } else {
    document.getElementById("msg05").innerHTML = "5- Mahatma Gandhi died in 1948";
  }
  if (document.getElementById('024').checked) {
    rc2++;
  } else {
    document.getElementById("msg06").innerHTML = "6- The first european who discovered the north american continent is Leif Erikson";
  }
  if (document.getElementById('026').checked) {
    rc2++;
  } else {
    document.getElementById("msg07").innerHTML = "7- The founder of the mongol empire is Genghis Khan";
  }
  if (document.getElementById('031').checked) {
    rc2++;
  } else {
    document.getElementById("msg08").innerHTML = "8- The inventor of the telephone is Alexander Graham Bell";
  }
  if (document.getElementById('036').checked) {
    rc2++;
  } else {
    document.getElementById("msg09").innerHTML = "9- The inventor of the first computing device is Charles Babbage";
  }
  if (document.getElementById('037').checked) {
    rc2++;
  } else {
    document.getElementById("msg010").innerHTML = "10- The first person who went to space is Yuri Gagarin";
  }
  if (document.getElementById('044').checked) {
    rc2++;
  } else {
    document.getElementById("msg011").innerHTML = "11- Hannibal crossed the alps in 218 BC";
  }
  if (document.getElementById('046').checked) {
    rc2++;
  } else {
    document.getElementById("msg012").innerHTML = "12- The Republic of Yugoslavia dissolved in 1992";
  }
  if (document.getElementById('049').checked) {
    rc2++;
  } else {
    document.getElementById("msg013").innerHTML = "13- Queen Elizabeth 2 become queen at the age of 27";
  }
  if (document.getElementById('055').checked) {
    rc2++;
  } else {
    document.getElementById("msg014").innerHTML = "14- Amr Ibn Al-Aas led muslim forc2es during conquest of Egypt";
  }
  if (document.getElementById('058').checked) {
    rc2++;
  } else {
    document.getElementById("msg015").innerHTML = "15- Omar Al-Mukhtar was called lion of the desert";
  }
  if (document.getElementById('063').checked) {
    rc2++;
  } else {
    document.getElementById("msg016").innerHTML = "16- Alfred Nobel invented the dynamite";
  }
  if (document.getElementById('068').checked) {
    rc2++;
  } else {
    document.getElementById("msg017").innerHTML = "17- Che Guevara was born in Argentina";
  }
  if (document.getElementById('070').checked) {
    rc2++;
  } else {
    document.getElementById("msg018").innerHTML = "18- John F.Kennedy was killed in 1963";
  }
  if (document.getElementById('076').checked) {
    rc2++;
  } else {
    document.getElementById("msg019").innerHTML = "19- Ruhallah Khumaini led Iran after the islamic revolution";
  }
  if (document.getElementById('078').checked) {
    rc2++;
  } else {
    document.getElementById("msg020").innerHTML = "20- The vikings come originally from Scandinavia";
  }
  document.getElementById('results2').innerHTML = rc2;
  if (rc2 == 20) {
    document.getElementById("rq01").innerHTML = "MIND-BLOWING !";
  }
  if ((rc2 >= 15) && (rc2 < 20)) {
    document.getElementById("rq02").innerHTML = "EXCELLENT !";
  }
  if ((rc2 >= 10) && (rc2 < 15)) {
    document.getElementById("rq03").innerHTML = "VERY GOOD ";
  }
  if ((rc2 >= 5) && (rc2 < 10)) {
    document.getElementById("rq04").innerHTML = "GOOD !";
  }
  if ((rc2 >= 0) && (rc2 < 5)) {
    document.getElementById("rq05").innerHTML = "GOOD LUCK NEXT TIME !";
  }
}