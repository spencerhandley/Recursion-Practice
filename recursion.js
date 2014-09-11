var sumDownByTwo = function(n){
  var sum = 0
  function sumDown(n){
    if(n<= 0){
      return
    }
    sum += n
    sumDown(n-2)
  }
  sumDown(n)
  return sum
}

var harmonicSum = function(n){
  var result = 0
  function sum(n){
    if(n === 0){
      return
    } else {
      result += (1/n)
      sum(n-1)
    }
  }
  sum(n)
  return result
}

var geometricSum = function(k){
  var result = 1
  function power (num, k){
    if(num >= k){
      console.log(num, k)
      return
    } else {
      console.log(num, k, result)
      result += (1/Math.pow(2,num))
      power(num+1, k)
    }
  }
  power(1, k)
  return result
}

var mult = function(j,k){
  var result = 0;
  var times = 0
  function addIt(j,k){
    if(times === k || times === -k){
      return
    } else if(j < 0 || k < 0){
      result -= j
      times++
      addIt(j,k)
    } else {
      result += j
      times++
      addIt(j,k)
    }
  }
  addIt(j,k)
  return result
}


var expt = function(n, k){
  var result = 1
  var times = 0
  function expon(n,k){
    if(times === k){
      return
    } else {
      console.log(n,k, result)
      result = (result * n)
      times++
      expon(n,k)
    }
  }
  expon(n,k)
  return result
}

var lcm = function(j,k){
  var result = j
  function recurse (j, k){
    if(result % k == 0){
      return
    } else{
      console.log((result % k))
      result += j
      recurse(j,k)
    }
  }
  recurse(j,k)
  return result
}

var loanLength = function(amount, interest, payment){
  var months = 0
  var monthlyInt = (interest/12)
  function recurse(a,i,p){
    if(a <= 0){
      return
    } else {
      months++
      console.log("Month " + months + ": $" + a)
      var remaining = a + (a * i) - p
      recurse(remaining, i, p)
    }
  }
  recurse(amount, monthlyInt, payment)
  return months
}
