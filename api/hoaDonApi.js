export const getAllHoaDon = async (pageNo) => {
  const response = await fetch(
    `https://nhathuoclt99pharmacity.click/nhan-vien/hoa-don?pageNo=${pageNo}`
  );
  if (response.status === 204) return [];
  const data = await response.json();

  return data;
};
export const getChiTietHoaDon = async (maHoaDon) => {
  const response = await fetch(
    `https://nhathuoclt99pharmacity.click/nhan-vien/hoa-don/${maHoaDon}`
  );
  if (response.status === 204) return {};
  const data = await response.json();

  return data;
};
