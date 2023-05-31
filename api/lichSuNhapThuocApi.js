export const lichSuNhapThuoc = async (id) => {
  const response = await fetch(
    `https://nhathuoclt99pharmacity.click/quan-ly/thuoc-va-loai-thuoc/thuoc/${id}/lich-su-nhap-thuoc`
  );
  if (response.status === 204) return [];
  const data = await response.json();

  return data;
};
