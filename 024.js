const permute = (perms, arr, m = '') => {
  if (arr.length === 0)
    perms.push(m)
  else
    for (let i = 0; i < arr.length; i++)
      permute(perms, arr.filter((v, ind)=>ind!=i), m+arr[i])
}
var perms = []
permute(perms, [...Array(10).keys()])
console.log(perms.sort()[1e6-1])