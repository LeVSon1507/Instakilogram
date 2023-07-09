import { Alert } from "react-native";

export const validateInputs = (name, email, password, confirmPassword) => {
  if (!name || !email || !password || !confirmPassword) {
    Alert.alert('Vui lòng điền đầy đủ thông tin.');
    return;
  }

  if (password !== confirmPassword) {
    Alert.alert('Mật khẩu và xác nhận lại mật khẩu không khớp.');
    return;
  }
  if (name === null || name.trim() === '') {
    // Kiểm tra nếu tên đăng nhập rỗng
    Alert.alert('Vui lòng nhập tên đăng nhập');
    return false;
  }

  if (email === null || email.trim() === '') {
    // Kiểm tra nếu email rỗng
    Alert.alert('Vui lòng nhập email');
    return false;
  }

  // Kiểm tra định dạng email hợp lệ
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    Alert.alert('Vui lòng nhập email hợp lệ');
    return false;
  }

  if (password === null || password.trim() === '') {
    // Kiểm tra nếu mật khẩu rỗng
    Alert.alert('Vui lòng nhập mật khẩu');
    return false;
  }

  return true;
};
