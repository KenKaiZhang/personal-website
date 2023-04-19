export const sendEmail = async (data: any) => {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(data),
  };
  return await fetch("api/send-email", config);
};
