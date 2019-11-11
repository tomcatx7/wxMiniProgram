const isNull = e => {
  return e == null || e == "" || e == undefined;
}
const validatePhone = value => {
  var flag = false;
  if(isNull(value)) return false;
  var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则,第一位是【1】开头，//第二位有【3,4,5,7,8】，第三位及以后可以是【0-9】
  if (reg.test(value)) {
    flag = true;
  }
  return flag;
}
const validatePass = value => {
  //校验密码：只能输入6-20个字母、数字、下划线 
  var patrn = /^(\w){6,20}$/;
  if (!patrn.test(value) || isNull(value)) return false;
  return true;
}

module.exports={
  isNull:isNull,
  validatePhone: validatePhone,
  validatePass: validatePass
}
