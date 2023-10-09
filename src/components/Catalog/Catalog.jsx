import './styles.css';

const Catalog = () => {
  const products = [
    {
      id: 1,
      name: 'Pantalón cargo',
      price: '$17.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8YVyhMOWT7DHpsK4SuiEuSFMG52l2QMfcau9QdkDTx-lyWgBJ5R9G76Ee-HpNvE7eCpSRTKjWuatrilkHGGl_wbBRjsIlYgbIZ0mHyOOgifDrbKU__O5kI4dxHl2n9cZIzxoYHuuPWnq7dvCBY0R1UOQ=w529-h941-s-no?authuser=0',
    },
    {
      id: 2,
      name: 'Top Sofia cruzado rayas',
      price: '$5.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc_jn714dhXqcKAwqjgokkiMGpeYT2C56VIiAsXZbOdJs7TLXuAp5rdu3e4HkT8uoCV5Avpx9G_3prjU565BSevOJQ_Mu7f5KBYy9fbuWiABj2tAVWBcRqQH5pJJzz1-Zh_n8a9O2VrPBXLtFrPxq7Eurw=w529-h941-s-no?authuser=0',
    },
    {
      id: 3,
      name: 'Pantalón cargo nevado',
      price: '$17.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8pi8tDmOkgVDrVZBkw-ol5qQ91xnY7qbBOEs1BBEASD6bpqj9XxXyseTO4i3HbMLilpiHUsQHAGNNVi035LIo1dvSL6vukGy5zuxPZdAcm1_kXd8Y3WDj2DIZHYRBwuqFFAMA6YNin1DYjZArSazB_pA=w529-h941-s-no?authuser=0',
    },
    {
      id: 4,
      name: 'Jean wide leg',
      price: '$17.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc_jdeI2-4w-lHrQav62UH8rlTq66hhI3kik9wJUB9serIVMMNAtxnmZn7MaHqhVBFUaolYcxGF3tAhcMiz5efftvjl8ZK-glpixWX5es1ccMxzMVtu-z0ebv3UhqhWcRQys1Gi2pCtYB81ppUvHW7QTvQ=w529-h941-s-no?authuser=0',
    },
    {
      id: 5,
      name: 'Wide leg Daila',
      price: '$19.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc-9TS0djkVUQl9TgUAsnhphc9jOzm4aYUsZ5zSsTeOGw5unIjxkCcQshx690mspFq-bewBTbt4SJ7bsjzz01rRnv5HwS9l_-XhWLyOvEHg_MacpxGuQPHp7rjHf4KBoCe_8O81cprIyIs4n9p_MgqPf6w=w529-h941-s-no?authuser=0',
    },
    {
      id: 6,
      name: 'Blazer de lino con botón',
      price: '$33.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc91PNf4e4iTDhw4GfFbrauYwlaeGrY0h1SvBpR9raKxI833tty0F-MN1nyjlC8q_jYKqKxS7sPWYx7Cbz2x-MabpcpbwFMfpYkQ-Uq9XrWTpSnE0iE_7iipFOTlW1iq_U1LqT-FdClJpwOXbH86JS6ITw=w529-h941-s-no?authuser=0',
    },
    {
      id: 7,
      name: 'Blazer de lino con botón',
      price: '$33.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8ikZh1msk_vi9tRrkia1VrOmiz_VXMV0L3xrbP56uSukr3tdDOIhpuQLhTnMWFms4dFimbHe-fhytnRK36rL_R16r3gmOaFMujGik3fM5ZBTkrAuuHQjppWM4wQpxu_ips_ObInKZCjrE7Q3DYhAUFNg=w529-h941-s-no?authuser=0',
    },
    {
      id: 8,
      name: 'Chaleco de lino sastrero',
      price: '$13.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8YlGF1MqxI0QRe2-ULRQFuEod4NsLj3Niv4KmgjotRTzAtl6joGDvGDekjWOpK10XsSTVIt1HJpvwbizUFB5eOtCD2PsrtBTbhzxDE0QMrX8dYQI1K9tvxlcPZrtEFnEA8ST_zzkGGdrdGOZqMKU-pBQ=w529-h941-s-no?authuser=0',
    },
    {
      id: 9,
      name: 'Cardigan con bolsillo',
      price: '$17.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc91DFBJW_oCPScFcuJv22e1Ol7PqklAi7oEbAIBQvqiAnNq6G0l5wf-kAvrJwJGZqvWmPOy3mNPi1sUY5lukIUbcdHx4YnsrZ391Ko1bpsRnB1jVhm5ZS234ffabsdgTq3bjHVYohK3YWCWdNdOVU8YqA=w529-h941-s-no?authuser=0',
    },
    {
      id: 10,
      name: 'Cardigan solapa',
      price: '$14.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc9QCIHDJuXxMjmN9yHXwuy1jdM8BN7ZUaJHsl3j27tvOEVQ4PX1XtGxpNXer2ozu7xvswOXoc3Mk4TysNrg861qehjpOT-Jxko4HNwOXduGTfJ18WNHq41QSktutJzpfXD59S_08kN9dByJXMe9gjgj2g=w529-h941-s-no?authuser=0',
    },
    {
      id: 11,
      name: 'Chaleco matelasse con capucha',
      price: '$18.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc9qvM7nmgR7xOtUC2VNadDVWZJlEFP2O4p4WxZPfjc2jZBAcBbDffXjKAJNYiDtxel4zoYB-mJSUdNKKXi4UCMD63cP-UdZXV-9fg_MulqamA8UFFp5I6OqHFlGFYTFYPaQ7p2uGNZEe7lA32J3vLIb9w=w529-h941-s-no?authuser=0',
    },
    {
      id: 12,
      name: 'Capa Averi',
      price: '$13.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8NuhUtaWpvJ0a7sKivu6AKwGKFQ62yB-ucJVVKa_sayzI_94SWG3X-Uc7jriYvnYrUlCdf0FcxkiW6RkoDrEi7G9xdDRO3hu_X0IsItHnklAkTOupMvIpPhCcNsnffo_KaH2WGEaAiRtPhaFuc-ROI7Q=w529-h941-s-no?authuser=0',
    },
    {
      id: 13,
      name: 'Chaleco matelassé con cierre',
      price: '$9.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc9AG-Utlvjc_VmbLfoS6xieZXPJFEEMywhEBjv1eHaJ0etSkkH9Zz8jgCqSuvqZG6TmvCBvTWSjzGuigYfeOxWzBonQCtPCfwn37S1C9BX1aVKxdD-o90F4GmNe0Vs_aGUSIoyfswc9_FdKVTu3qCh1Ag=w529-h941-s-no?authuser=0',
    },
    {
      id: 14,
      name: 'Campera de jean azul',
      price: '$20.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc9b0G13Jki0h4iFIDjiVnXjZtD4PjNEtXb-ywQHlnpFb2S6zteEnFnWFr_dClu7QMaST6syVe6DTjIUB0Y5TBZZbShEU0fL10OQYHqU6NGe3eoeUx0PX8obWMo3m0y3iu1nf2mvLp2tIPMAz3u9GxgdSQ=w529-h941-s-no?authuser=0',
    },
    {
      id: 15,
      name: 'Campera de gabardina corte jean',
      price: '$20.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc_yiE6oCDzAXkZak4H1VXkcomKtEO4VWRdaZIdUo2_Cdhx9fSMtpEdXKKlnX72OA5jHu5bUsRMoDbeeh_vVX-72KGGOV6U3wsa1pcidJVvVDudB-NUUc3SWNwEph8Gpix4DQwfLY_Khv9AoNaMvlwqYgg=w529-h941-s-no?authuser=0',
    },
    {
      id: 16,
      name: 'Campera de jean alastizada',
      price: '$20.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc-qy9GxGIkgvEB9F0iGXQOxgrt_7B6zl2-4yrhO1O0Da6y3dfZZTl24_AuGOaROHgJUnz3NzmiqXJBHcS2GsLEMRfBh8qjrMIK6DODeQpjfTezj_4m-OqGRYlsOELA4UjsaShhVqJjmsCthBJp8mFU1gQ=w529-h941-s-no?authuser=0',
    },
    {
      id: 17,
      name: 'Buzo rústico liviano con costura frontal',
      price: '$16.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8hOZKwSlWMEs1R97NQVx3DllUiMVSz4J3ouNBXrbbwZRIGY0gaJ63TpmIxlIN9vM4HOWds53b-3_RH6zn5N3UjLy68BG9iK-ycRL9R9AEi2-7b8ixr1LdKj25ED91cYh8cflLhtXm1XjYykI7uGCUPGg=w529-h941-s-no?authuser=0',
    },
    {
      id: 18,
      name: 'Buzo con capucha Love',
      price: '$15.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc_W0du2VTPfhZAd1baadNZcSX7R6LLeHTAD6y0Z6MaJmulAofM8ap7evO8tKJeO9EL2ynqAotzy4n-lIoJP4y17VbAi3aZTPm5Lf6SF6RrB6GrVfystAcM17FaweAKnFwSfW7agygXAHjbPH7oayBALlw=w529-h941-s-no?authuser=0',
    },
    {
      id: 19,
      name: 'Maxi buzo frisa invisible',
      price: '$9.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc_Yc_LOSkSOgEyNurStJfrsTU0YwG_2H0rDVK4D82Kq5qig_5AsvCOqtMhQuG7P96h2eq1iXynG6ahl7lrEAU3F1d7EZSs_G7omD4RqeIQZb_gfW1Gntx691f7x920uV4J6iQ36bWByrJBTvvqj9w-8Zg=w529-h941-s-no?authuser=0',
    },
    {
      id: 20,
      name: 'Buzo canguro frizado',
      price: '$18.000',
      image:
        'https://lh3.googleusercontent.com/pw/AIL4fc8QG1yQ9a5tDAw0AMlECTvt4D0nviYijR5zsFCxSnv53Q-EPUnvb8N1Yxv4pVeihRJL6jCMnJbCzx5xMZ4HmSaKBNbosrjswiN2s4kWj2NkdFHYNS-5UASTs7tvJHxHkL0RocL3xGgeR4mz6PaVL0Odnw=w529-h941-s-no?authuser=0',
    },
  ];

  return (
    <div className="catalog">
      <h2 id="catalogo" className="catalog-title">
        CATÁLOGO
      </h2>
       <p class="catalogo-link"><a href="https://photos.google.com/share/AF1QipODeyyXUrgw2Ymspo8rj46Ep11UMrkFgtYfMeN44ZWkd60L0x-_AqGUGTGn0-UWfA?key=NHNpdzRNZEI2OGtmY2RoVzFZODZtWU1JLS1rS3Rn" target="_blank">¡Visitá nuestro catálogo actualizado!</a>
       </p>
      <br />
      <p class="catalogo-link">
      Nuestros medios de pago son Mercado pago, efectivo, transferencia y tarjetas bancarias con hasta 3 cuotas sin interés.   
      </p>
      </div>
  );
};

export default Catalog;
