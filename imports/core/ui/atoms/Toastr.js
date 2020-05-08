import { toast as Toastr, Flip } from 'react-toastify';

Toastr.configure({
  autoClose: 5000,
  draggable: false,
  position: Toastr.POSITION.TOP_RIGHT,
  transition: Flip,
});

export default Toastr;
