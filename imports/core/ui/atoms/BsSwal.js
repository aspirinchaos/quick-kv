import Swal from './Swal';

const BsSwal = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success mx-2',
    cancelButton: 'btn btn-danger mx-2',
  },
  buttonsStyling: false,
});

export default BsSwal;
