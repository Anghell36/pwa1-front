/* ─── DATA ──────────────────────────────────────────────────── */
const menuData = [
    { id:'e1', nombre:'Papas Quesillo',           precio:75,  cat:'Entradas',     desc:'Papas doradas bañadas en mezcla de quesos fundidos con trocitos de tocino ahumado.',                                img:'https://images.unsplash.com/photo-1743193711514-4f7bc5d78d4d?q=80&w=800&auto=format&fit=crop' },
    { id:'e2', nombre:'Guacamole Artesanal',       precio:85,  cat:'Entradas',     desc:'Preparado al momento en molcajete con aguacate hass, pico de gallo y totopos crujientes.',                         img:'https://plus.unsplash.com/premium_photo-1681406689584-2f7612fa98a4?q=80&w=800&auto=format&fit=crop' },
    { id:'e3', nombre:'Queso Fundido c/ Chorizo',  precio:110, cat:'Entradas',     desc:'Cazuela de queso gouda y asadero con chorizo dorado. Incluye tortillas de harina calientes.',                     img:'https://foodtown.b-cdn.net/wp-content/uploads/2024/01/SkilletTurkeyRice.jpg' },
    { id:'a1', nombre:'Alambre de Pastor',         precio:125, cat:'Alambres',     desc:'Carne al pastor, pimientos asados, cebolla caramelizada, tocino crujiente y abundante queso derretido.',          img:'https://www.sazondelrancho.com.mx/wp-content/uploads/2024/06/ALAMBRE-de-Pastor-1067x675.jpg' },
    { id:'a2', nombre:'Alambre de Asada',          precio:140, cat:'Alambres',     desc:'Trozos selectos de res a la parrilla, vegetales asados, tocino ahumado y costra de queso.',                       img:'https://i0.wp.com/sanpasqualskitchen.com/wp-content/uploads/2020/10/TacosdeAlambre1398.jpg' },
    { id:'a3', nombre:'Alambre Norteño (Discada)', precio:155, cat:'Alambres',     desc:'Res, cerdo, salchicha asada, chorizo, jalapeño toreado y extra queso. El más completo.',                          img:'https://recetassfaciless.com/wp-content/uploads/2025/10/alambre-de-res-receta.webp' },
    { id:'a4', nombre:'Alambre de Pollo',          precio:115, cat:'Alambres',     desc:'Pechuga de pollo a la plancha, pimientos, cebolla, tocino y nuestro mix de quesos fundidos.',                    img:'https://cdn0.recetasgratis.net/es/posts/6/8/2/alambre_de_pollo_con_queso_78286_1200.webp' },
    { id:'a5', nombre:'Alambre Vegetariano',       precio:110, cat:'Alambres',     desc:'Champiñones, calabacita, pimientos asados, cebolla, elote dulce y queso panela asado.',                          img:'https://www.launion.com.mx/media/k2/items/cache/bc9aced2e2e53f6c957ef31ad04f4d56_XL.jpg' },
    { id:'a6', nombre:'Alambre de Arrachera',      precio:185, cat:'Alambres',     desc:'Arrachera marinada, pimientos tricolor, cebolla dulce y costra extra gruesa de queso.',                          img:'https://www.angsarap.net/wp-content/uploads/2016/01/Beef-Alambre.jpg' },
    { id:'a7', nombre:'Alambre Hawaiano',          precio:135, cat:'Alambres',     desc:'Pastor, jamón asado, piña, pimientos y queso derretido. Dulce y salado en un solo plato.',                       img:'https://cdn7.kiwilimon.com/recetaimagen/38687/960x720/49707.jpg.webp' },
    { id:'h1', nombre:'Burger Clásica Quesillo',   precio:95,  cat:'Hamburguesas', desc:'Carne 100% res (200g), lechuga, tomate, cebolla morada y queso amarillo derretido.',                             img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop' },
    { id:'h2', nombre:'Burger Doble Monstruo',     precio:145, cat:'Hamburguesas', desc:'Doble carne, doble tocino, aros de cebolla y un baño generoso de queso amarillo caliente.',                      img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop' },
    { id:'h3', nombre:'Burger BBQ Texana',         precio:135, cat:'Hamburguesas', desc:'Carne de res, aros de cebolla empanizados, tocino crujiente, queso cheddar y BBQ ahumado.',                      img:'https://frontporchpantry.com/cdn/shop/products/TexasBBQLoadedBurger_2000x.jpg' },
    { id:'h4', nombre:'Burger Pollo Crujiente',    precio:120, cat:'Hamburguesas', desc:'Pollo empanizado estilo sureño, ensalada de col, pepinillos y aderezo chipotle.',                                img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop' },
    { id:'h5', nombre:'Burger Mexicana',           precio:130, cat:'Hamburguesas', desc:'Carne a la parrilla, guacamole fresco, chiles toreados, cebolla asada y manchego fundido.',                      img:'https://www.vvsupremo.com/wp-content/uploads/2018/05/Mexican-Burger-with-Chorizo.jpg' },
    { id:'b1', nombre:'Horchata Artesanal',        precio:35,  cat:'Bebidas',      desc:'Botella 500ml. Receta secreta de la casa con un toque de canela.',                                               img:'https://mahatmarice.com/wp-content/uploads/2020/04/GettyImages-493110032.jpg' },
    { id:'b2', nombre:'Limonada c/ Frutos Rojos',  precio:45,  cat:'Bebidas',      desc:'Bebida gasificada 500ml con limón y macerado de frutos rojos.',                                                  img:'https://www.cocinadelirante.com/688x459/filters:format(webp):quality(75)/sites/default/files/styles/gallerie/public/limonada-de-frutos-rojos-refrescante.jpg' },
    { id:'b3', nombre:'Refresco de Cola',          precio:25,  cat:'Bebidas',      desc:'Lata 355ml bien fría. El clásico acompañamiento de tus alambres.',                                              img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop' },
    { id:'b4', nombre:'Agua Fresca de Jamaica',    precio:30,  cat:'Bebidas',      desc:'Medio litro de infusión natural de flor de jamaica, endulzada perfectamente, bien fría.',                       img:'https://cocinamia.com.mx/wp-content/uploads/2021/01/imgpsh_fullsize_anim-63.jpg' },
    { id:'b5', nombre:'Cerveza Clara de Barril',   precio:55,  cat:'Bebidas',      desc:'Tarro helado 500ml. Maridaje perfecto para tu alambre de arrachera.',                                           img:'https://switchsoftshop.myshopify.com/cdn/shop/files/NAZ_264a0b1fa3a8453f9a993e81da92c36d_1200x1200.jpg' },
    { id:'p1', nombre:'Churros Rellenos',          precio:55,  cat:'Postres',      desc:'3 churros crujientes con canela y azúcar, rellenos de cajeta o chocolate oscuro.',                              img:'https://www.cocinavital.mx/wp-content/uploads/2017/09/churros-rellenos.jpg' },
    { id:'p2', nombre:'Flan Napolitano',           precio:45,  cat:'Postres',      desc:'Rebanada de flan casero cremoso con caramelo oscuro y toque de vainilla.',                                       img:'https://www.cocinadelirante.com/sites/default/files/images/2024/08/rico-flan-napolitano-en-solo-10-minutos.jpg' },
    { id:'p3', nombre:'Cheesecake de Zarzamora',   precio:65,  cat:'Postres',      desc:'Pastel de queso cremoso con jalea natural de zarzamora y base de galleta.',                                      img:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop' },
    { id:'p4', nombre:'Brownie c/ Helado',         precio:70,  cat:'Postres',      desc:'Brownie de chocolate caliente con bola de helado de vainilla artesanal.',                        img:'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/BS7XK3UP25GMJO3G5IXXDXCRCE.png' },
    { id:'p5', nombre:'Tutsipop',                  precio:2,   cat:'Postres',      desc:'La paleta clásica de tu infancia. Sabores surtidos. El detalle perfecto para cerrar tu orden.', img:'https://scontent.ftrc1-1.fna.fbcdn.net/v/t39.30808-6/494265169_1274930314640181_4976202900880091836_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rxZWbvS5CmcQ7kNvwFteSgh&_nc_oc=AdqxwoGOKbQ7Aod1SOMLI9HeZgY-KJkZgjKhRoG0tq7mOjdBqVZvGGA2Vt2vkkjP8lA&_nc_zt=23&_nc_ht=scontent.ftrc1-1.fna&_nc_gid=TSV1lmbpIsse3expI4AiLw&_nc_ss=7a389&oh=00_Af3_evjOqxMxToJY9ocEtFFFFjaCdme1R0tk8vy8wQWM2A&oe=69E69A34' },
];

/* ─── ESTADO ─────────────────────────────────────────────────── */
let carrito        = [];
let catActual      = 'Todos';
let stripe = null;
let elements       = null;
let cardNumber = null, cardExpiry = null, cardCvc = null;

const BACKEND_URL = 'https://pwa1-backend.vercel.app/api/checkout';

/* ─── HELPERS ────────────────────────────────────────────────── */
const fmt        = n => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(n);
const getTotal   = () => carrito.reduce((s,i) => s + i.precio * i.cantidad, 0);
const getItems   = () => carrito.reduce((s,i) => s + i.cantidad, 0);
const fallbackImg = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800';

/* ─── RENDER MENÚ ────────────────────────────────────────────── */
function renderMenu(lista) {
    const grid  = document.getElementById('product-grid');
    const empty = document.getElementById('empty-state');
    const title = document.getElementById('section-title');
    const count = document.getElementById('section-count');

    if (!lista.length) {
        grid.innerHTML = '';
        empty.classList.remove('hidden'); empty.classList.add('flex');
        return;
    }
    empty.classList.add('hidden'); empty.classList.remove('flex');
    title.textContent = catActual === 'Todos' ? 'Todo el Menú' : catActual;
    count.textContent = lista.length + (lista.length === 1 ? ' platillo' : ' platillos');

    grid.innerHTML = lista.map((p, i) => {
        const enCarrito = carrito.find(c => c.id === p.id);
        return `
        <div class="prod-card card-appear flex flex-col" style="animation-delay:${Math.min(i*.04,.3)}s">
            <div class="relative overflow-hidden bg-gray-100" style="height:200px">
                <img src="${p.img}" alt="${p.nombre}" loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onerror="this.src='${fallbackImg}'">
                <div class="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full font-black text-sm shadow-card">
                    ${fmt(p.precio)}
                </div>
                <div class="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    ${p.cat}
                </div>
            </div>
            <div class="p-5 flex flex-col flex-1">
                <h3 class="font-black text-base leading-snug mb-1.5">${p.nombre}</h3>
                <p class="text-sm text-brand-muted leading-relaxed flex-1 mb-4">${p.desc}</p>
                ${enCarrito
                    ? `<div class="flex items-center justify-between bg-amber-50 rounded-2xl px-3 py-2.5 border border-amber-200">
                           <button onclick="cambiarCantidad('${p.id}',-1)"
                               class="w-8 h-8 rounded-xl bg-white border border-amber-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition text-xs shadow-sm">
                               <i class="fa-solid fa-minus"></i>
                           </button>
                           <span class="font-black tabular-nums text-sm">${enCarrito.cantidad} &nbsp;·&nbsp; ${fmt(p.precio * enCarrito.cantidad)}</span>
                           <button onclick="cambiarCantidad('${p.id}',1)"
                               class="w-8 h-8 rounded-xl bg-brand-yellow border border-amber-300 flex items-center justify-center hover:bg-brand-orange transition text-xs shadow-sm">
                               <i class="fa-solid fa-plus"></i>
                           </button>
                       </div>`
                    : `<button onclick="agregarAlCarrito('${p.id}')"
                           class="w-full bg-brand-surface hover:bg-brand-yellow border border-gray-200 hover:border-brand-yellow text-brand-dark py-3 rounded-2xl font-bold text-sm transition flex justify-center items-center gap-2">
                           <i class="fa-solid fa-plus text-xs"></i> Agregar
                       </button>`
                }
            </div>
        </div>`;
    }).join('');
}

/* ─── FILTRAR ────────────────────────────────────────────────── */
function filtrar(cat, btn) {
    catActual = cat;
    document.querySelectorAll('.cat-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('input[type=search]').forEach(el => el.value = '');
    renderMenu(cat === 'Todos' ? menuData : menuData.filter(p => p.cat === cat));
}

function buscarProducto(q) {
    const t = q.trim().toLowerCase();
    if (!t) { filtrar(catActual, document.querySelector('.cat-chip.active')); return; }
    const r = menuData.filter(p => p.nombre.toLowerCase().includes(t) || p.desc.toLowerCase().includes(t));
    document.getElementById('section-title').textContent = `"${q}"`;
    document.getElementById('section-count').textContent = r.length + ' encontrados';
    renderMenu(r);
}

/* ─── CARRITO ────────────────────────────────────────────────── */
function reRender() {
    const q = [...document.querySelectorAll('input[type=search]')].map(el => el.value.trim().toLowerCase()).find(v => v);
    if (q) {
        renderMenu(menuData.filter(p => p.nombre.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
    } else {
        renderMenu(catActual === 'Todos' ? menuData : menuData.filter(p => p.cat === catActual));
    }
}

function agregarAlCarrito(id) {
    const existe = carrito.find(i => i.id === id);
    if (existe) existe.cantidad++;
    else carrito.push({ ...menuData.find(p => p.id === id), cantidad: 1 });
    actualizarUI();
    mostrarToast(menuData.find(p => p.id === id).nombre);
    reRender();
}

function cambiarCantidad(id, delta) {
    const idx = carrito.findIndex(i => i.id === id);
    if (idx === -1) return;
    carrito[idx].cantidad += delta;
    if (carrito[idx].cantidad <= 0) carrito.splice(idx, 1);
    actualizarUI();
    reRender();
}

function actualizarUI() {
    const items = getItems();
    const total = getTotal();

    // Badge desktop
    const badge = document.getElementById('cart-badge-desktop');
    if (items > 0) { badge.textContent = items > 99 ? '99+' : items; badge.classList.remove('hidden'); }
    else badge.classList.add('hidden');

    // Header count
    document.getElementById('cart-header-count').textContent =
        items === 0 ? '0 productos' : `${items} producto${items > 1 ? 's' : ''}`;

    // Botón móvil
    const mb = document.getElementById('mobile-cart-btn');
    if (items > 0) {
        mb.classList.remove('hidden');
        document.getElementById('mobile-cart-count').textContent = items;
        document.getElementById('mobile-cart-total').textContent  = fmt(total);
    } else {
        mb.classList.add('hidden');
    }

    // Totales
    document.getElementById('summary-subtotal').textContent = fmt(total);
    document.getElementById('summary-total').textContent    = fmt(total);
    document.getElementById('btn-checkout').disabled = items === 0;

    // Lista del drawer
    const lista = document.getElementById('cart-items');
    if (!carrito.length) {
        lista.innerHTML = `
            <div class="flex flex-col items-center justify-center flex-1 py-16 text-center">
                <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mb-4">🛒</div>
                <p class="font-bold text-gray-700">Tu orden está vacía</p>
                <p class="text-sm text-brand-muted mt-1">Agrega algo del menú</p>
                <button onclick="toggleCart()" class="mt-5 text-brand-orange font-bold text-sm hover:underline">Ver menú</button>
            </div>`;
        return;
    }
    lista.innerHTML = carrito.map(item => `
        <div class="flex gap-3 items-center bg-brand-surface rounded-2xl p-3 border border-gray-100">
            <img src="${item.img}" alt="${item.nombre}" class="w-[60px] h-[60px] rounded-xl object-cover flex-shrink-0"
                 onerror="this.src='${fallbackImg}'">
            <div class="flex-1 min-w-0">
                <p class="font-bold text-sm leading-snug truncate">${item.nombre}</p>
                <p class="text-brand-orange font-black text-sm mt-0.5">${fmt(item.precio)}</p>
                <p class="text-[11px] text-brand-muted">Subtotal: ${fmt(item.precio * item.cantidad)}</p>
            </div>
            <div class="flex items-center gap-1.5 bg-white rounded-xl px-2 py-1.5 border border-gray-200 flex-shrink-0">
                <button onclick="cambiarCantidad('${item.id}',-1)"
                    class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 transition text-xs">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span class="w-5 text-center font-black text-sm tabular-nums">${item.cantidad}</span>
                <button onclick="cambiarCantidad('${item.id}',1)"
                    class="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-brand-orange transition text-xs">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>`).join('');
}

/* ─── TOAST ──────────────────────────────────────────────────── */
let _tt = null;
function mostrarToast(nombre) {
    const t = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = `"${nombre}" agregado`;
    t.classList.add('show');
    clearTimeout(_tt);
    _tt = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ─── TOGGLE CART ────────────────────────────────────────────── */
function toggleCart() {
    const ov = document.getElementById('cart-overlay');
    if (ov.classList.contains('open')) { ov.classList.remove('open'); document.body.style.overflow = ''; }
    else { ov.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

/* ─── STRIPE ELEMENTS ────────────────────────────────────────── */
function initStripe() {
    if (stripe) return; // Ya está inicializado

    // ⚠️ REEMPLAZA con tu clave pública real de Stripe
    stripe = Stripe('pk_test_51T2ymfGTQu1cMhAHq1rupNpg7cadOsRLcnsMenfjXyb28wWnp6PNIgFyICickjSQUrUHLiC3TLlzDjWBqZDU5rHH00CFPexfLX');

    elements = stripe.elements({
        fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap' }]
    });

    const style = {
        base: {
            fontFamily: 'Outfit, sans-serif',
            fontSize: '15px',
            color: '#1C1917',
            fontWeight: '500',
            '::placeholder': { color: '#A8A29E' }
        },
        invalid: { color: '#EF4444', iconColor: '#EF4444' }
    };

    cardNumber = elements.create('cardNumber', { style, showIcon: true });
    cardExpiry = elements.create('cardExpiry', { style });
    cardCvc = elements.create('cardCvc', { style });

    cardNumber.mount('#stripe-card-number');
    cardExpiry.mount('#stripe-card-expiry');
    cardCvc.mount('#stripe-card-cvc');

    const fields = [
        { el: cardNumber, id: 'stripe-card-number' },
        { el: cardExpiry, id: 'stripe-card-expiry' },
        { el: cardCvc, id: 'stripe-card-cvc' }
    ];

    fields.forEach(({ el, id }) => {
        const container = document.getElementById(id);
        el.on('focus', () => container.classList.add('focused'));
        el.on('blur', () => container.classList.remove('focused'));
        el.on('change', (event) => {
            container.classList.toggle('invalid', !!event.error);
            setStripeError(event.error ? event.error.message : null);
        });
    });
}

function setStripeError(msg) {
    const box = document.getElementById('stripe-error');
    const msgSpan = document.getElementById('stripe-error-msg');
    if (msg) {
        msgSpan.textContent = msg;
        box.classList.remove('hidden');
    } else {
        box.classList.add('hidden');
    }
}

/* ─── ABRIR MODAL PAGO ───────────────────────────────────────── */

function abrirModalPago() {
    if (!carrito.length) return;

    const total = getTotal();
    const factura = document.getElementById('req-factura').checked;

    document.getElementById('rfc-section').classList.toggle('hidden', !factura);
    document.getElementById('pay-total-display').textContent = fmt(total);
    document.getElementById('btn-pagar-total').textContent = fmt(total);

    // Previsualización de productos
    const preview = document.getElementById('pay-items-preview');
    preview.innerHTML = carrito.slice(0, 4).map(i =>
        `<img src="${i.img}" class="w-10 h-10 rounded-xl object-cover border-2 border-white shadow-sm" onerror="this.src='${fallbackImg}'">`
    ).join('');

    // Cerrar carrito si está abierto
    document.getElementById('cart-overlay').classList.remove('open');
    document.body.style.overflow = 'hidden';

    // Mostrar modal
    document.getElementById('pay-overlay').classList.add('open');

    // Inicializar Stripe (solo una vez)
    initStripe();
}

function cerrarModalPago() {
    document.getElementById('pay-overlay').classList.remove('open');
    document.body.style.overflow = '';
    setStripeError(null);
}

/* ─── CONFIRMAR PAGO ─────────────────────────────────────────── */
async function confirmarPago() {
    const nombre = document.getElementById('pay-nombre').value.trim();
    const email = document.getElementById('pay-email').value.trim();

    if (!nombre || !email) {
        alert('Por favor ingresa tu nombre y correo electrónico.');
        return;
    }

    const btn = document.getElementById('btn-pagar-ahora');
    const btnText = document.getElementById('btn-pagar-texto');
    const originalText = btnText.innerHTML;

    btn.disabled = true;
    btnText.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Procesando...';

    try {
        // 1. Llamar al backend para crear el PaymentIntent
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: carrito,
                nombre,
                email,
                total: getTotal(),
                // Puedes enviar RFC y razón social si quieres guardarlos en BD
                rfc: document.getElementById('pay-rfc').value,
                razonSocial: document.getElementById('pay-razon').value,
                usoCFDI: document.getElementById('pay-cfdi').value
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || 'Error del servidor');
        }

        const { clientSecret } = await response.json();

        // 2. Confirmar el pago con Stripe
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumber,
                billing_details: {
                    name: nombre,
                    email: email
                }
            }
        });

        if (error) {
            throw new Error(error.message);
        }

        if (paymentIntent.status === 'succeeded') {
            // Pago exitoso
            cerrarModalPago();
            mostrarConfirmacion(paymentIntent.id.slice(-8));
        }
    } catch (error) {
        alert('Error al procesar el pago: ' + error.message);
        setStripeError(error.message);
    } finally {
        btn.disabled = false;
        btnText.innerHTML = originalText;
    }
}

/* ─── CONFIRMACIÓN ───────────────────────────────────────────── */
function mostrarConfirmacion(orderId) {
    document.getElementById('confirm-order-id').textContent = '#ORD-' + orderId;
    const ov = document.getElementById('confirm-overlay');
    ov.classList.remove('hidden');
    ov.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function cerrarConfirmacion() {
    const ov = document.getElementById('confirm-overlay');
    ov.classList.add('hidden');
    ov.classList.remove('flex');
    document.body.style.overflow = '';
    carrito = [];
    actualizarUI();
    reRender();
    // Limpiar formulario
    ['pay-nombre', 'pay-tel', 'pay-email', 'pay-rfc', 'pay-razon'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('req-factura').checked = false;
    document.getElementById('rfc-section').classList.add('hidden');
}

/* ─── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuData);
    actualizarUI();

    // Evento para mostrar/ocultar sección RFC
    document.getElementById('req-factura').addEventListener('change', e => {
        document.getElementById('rfc-section').classList.toggle('hidden', !e.target.checked);
    });

    // Cerrar modales con ESC
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        if (document.getElementById('confirm-overlay').classList.contains('flex')) {
            cerrarConfirmacion();
        } else if (document.getElementById('pay-overlay').classList.contains('open')) {
            cerrarModalPago();
        } else if (document.getElementById('cart-overlay').classList.contains('open')) {
            toggleCart();
        }
    });
});

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        const swPath = '/pwa1-front/sw.js'; 
        navigator.serviceWorker.register(swPath, { scope: '/' })
            .then(reg => console.log('SW registrado:', reg.scope))
            .catch(err => console.error('SW no registrado:', err));
    });
}