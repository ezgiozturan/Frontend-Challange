import "../css/Profile.css";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  return (
    <>
      <div className="profile-container">
        <h3 id="profile-baslik">{t("Profile")}</h3>
        <div className="profile">
          <div className="profile-left-section">
            <h4>{t("Profile")}</h4>
            <div className="profil-icerik">
              <div className="part1">
                <p className="p1">{t("Born Date")}</p>
                <p>05.05.1998</p>
              </div>
              <div className="part2">
                <p className="p1">{t("City")}</p>
                <p>Canakkale</p>
              </div>
              <div className="part3">
                <p className="p1">{t("Education")}</p>
                <p>
                  {t("Hacettepe University-Occupational Therapy, ")}
                  {t(
                    "izmir Katip Çelebi University Software Engineer Master(during)"
                  )}
                </p>
              </div>
              <div className="part4">
                <p className="p1">{t("The Role")}</p>
                <p> Frontend</p>
              </div>
            </div>
          </div>
          <div className="profile-right-section">
            <h4>{t("About Me")}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              mattis nulla nibh, in dapibus erat consequat vel. Sed nisi nulla,
              tempus eu elementum quis, egestas eu justo.
            </p>
            <p>
              Sed molestie aliquet tristique. Praesent a eleifend est, bibendum
              fermentum quam. Suspendisse eros nisi, porttitor ut felis et,
              tempus ultrices ex.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
