import { useTranslation } from "react-i18next";

const Header = () => {
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return(
      <div>
          <p>
              <h1>{t("header.message")}</h1>
              <button onClick={()=> handleChangeLanguage("en")}>EN</button>
              <button onClick={()=> handleChangeLanguage("es")}>ES</button>
          </p>
      </div>
    );
};

export default Header