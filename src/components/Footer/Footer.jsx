import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <p>Copyright. @ 2023 Corp Name <span>Все права защищены</span></p>
                <div>
                    <a href="#">Пользовательское соглашение </a><span className="line"> | </span><a href="#">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
}
