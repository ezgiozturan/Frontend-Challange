export default function Profile() {
  return (
    <>
      <h3>Profile</h3>
      <div className="profile-container">
        <div className="left-section">
          <h4>Profile</h4>
          <div className="profil-icerik">
            <div>
              <p>Doğum tarihi</p>
              <p>05.05.1998</p>
            </div>
            <div>
              <p>İkametgah Şehri</p>
              <p>Çanakkale</p>
            </div>
            <div>
              <p>Eğitim Durumu</p>
              <p>
                Hacettepe Üniversitesi-Ergoterapi, izmir Katip Çelebi
                Üniversitesi Tezsiz Yazılım Mühendisliği Yüksek Lisansı(devam
                ediyor)
              </p>
            </div>
            <div>
              <p>Tercih Ettiği Rol</p>
              <p>Frontend</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <h4>About Me</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla,
            tempus eu elementum quis, egestas eu justo.
          </p>
          <p>
            Sed molestie aliquet tristique. Praesent a eleifend est, bibendum
            fermentum quam. Suspendisse eros nisi, porttitor ut felis et, tempus
            ultrices ex.
          </p>
        </div>
      </div>
    </>
  );
}
