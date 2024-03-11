import { CartWidget } from "./cartWidget";

export const NavBar = () => (
    <>
    <div>Lean's Shop</div>
    <ul>
        <li>
            <a href="a">Inicio</a>
        </li>
        <li>
            <a href="a">Acerca de</a>
        </li>
        <li>
            <a href="a">Contacto</a>
        </li>
    </ul>
    <CartWidget />
    </>
)