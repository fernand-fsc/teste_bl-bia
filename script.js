const versiculos = [
  {
    en: "The Lord is my shepherd; I shall not want. – Psalm 23:1",
    pt: "O Senhor é meu pastor; de nada terei falta. – Salmos 23:1"
  },
  {
    en: "Commit your way to the Lord; trust in him and he will act. – Psalm 37:5",
    pt: "Entregue o seu caminho ao Senhor; confia nele, e ele agirá. – Salmos 37:5"
  },
  {
    en: "I can do all things through him who strengthens me. – Philippians 4:13",
    pt: "Tudo posso naquele que me fortalece. – Filipenses 4:13"
  },
  {
    en: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.” – Jeremiah 29:11",
    pt: "Porque sou eu que conheço os planos que tenho para vocês...” — declara o SENHOR — “planos de fazê‑los prosperar, não de causar dano, planos de dar a vocês esperança e um futuro. – Jeremias 29:11"
  },
  {
    en: "Give thanks in all circumstances; for this is God’s will for you in Christ Jesus. – 1 Thessalonians 5:18",
    pt: "Deem graças em todas as circunstâncias, pois essa é a vontade de Deus para vocês em Cristo Jesus. – 1 Tessalonicenses 5:18"
  }
];

document.getElementById("btnGerar").addEventListener("click", () => {
  const sorteado = versiculos[Math.floor(Math.random() * versiculos.length)];
  document.getElementById("versiculo").innerText = `${sorteado.en}\n\n${sorteado.pt}`;
});
