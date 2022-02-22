function secret(text: string) {
  const split = text.split("*");
  const html = `&lt${split[0]}&gt&lt/${split[0]}&gt`;
  return html.repeat(+split[1]);
}

export const result = secret("div*2");
export const result1 = secret("p*1");
export const result2 = secret("li*3");
