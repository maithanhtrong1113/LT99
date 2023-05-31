export const getChiTietDonHang = async (maDonHang) => {
  const response = await fetch(
    `https://khoaluanquanlynhathuoclt99.lol/nhan-vien/don-hang-online/${maDonHang}`
  );
  if (response.status === 204) return {};
  const data = await response.json();

  return data;
};
export const getAllDonHang = async (pageNo) => {
  const response = await fetch(
    `https://khoaluanquanlynhathuoclt99.lol/nhan-vien/don-hang-online?pageNo=${pageNo}`
  );
  if (response.status === 204) return [];
  const data = await response.json();

  return data;
};
export const acpDonHang = (maDonHang) => {
  const response = fetch(
    `https://khoaluanquanlynhathuoclt99.lol/nhan-vien/don-hang-online/${maDonHang}/cap-nhat-trang-thai`
  );
  return response;
};
export const deniedDonHang = (maDonHang) => {
  const response = fetch(
    `https://khoaluanquanlynhathuoclt99.lol/nhan-vien/don-hang-online/${maDonHang}/cap-nhat-trang-thai?deny= `
  );
  return response;
};
export const getChiTietDonHangPhiaKhach = async (maDonHang) => {
  const response = await fetch(
    `https://khoaluanquanlynhathuoclt99.lol/khach-hang/don-hang/${maDonHang}`
  );
  if (response.status === 204) return {};
  const data = await response.json();

  return data;
};
export const huyDonHangPhiaKhach = async (maDonHang) => {
  const response = await fetch(
    `https://khoaluanquanlynhathuoclt99.lol/khach-hang/don-hang/${maDonHang}/huy-don`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const chiTiet = await getChiTietDonHangPhiaKhach(maDonHang);
  return chiTiet;
};
export const getDonHangTheoTrangThai = async (pageNo, dhsl) => {
  const url = `https://khoaluanquanlynhathuoclt99.lol/nhan-vien/don-hang-online/lay-don-hang-theo-trang-thai?pageNo=${pageNo}&trangThai=${dhsl}`;
  console.log(url);
  const response = await fetch(url);
  if (response.status === 204) return [];
  const data = await response.json();

  return data;
};
