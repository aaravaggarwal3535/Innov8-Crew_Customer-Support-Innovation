setTimeout(() => {
    let click1 = document.getElementById("first");
    let click2 = document.getElementById("second");
    let click3 = document.getElementById("third");
    let click4 = document.getElementById("fourth");
    let click5 = document.getElementById("fifth");

    const op1 = async () => {
        document.getElementById("first").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Diwali Sale</button>'
        document.getElementById("second").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Discount On Electronic</button>'
        document.getElementById("third").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">50% OFF Offer</button>'
        document.getElementById("fourth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Stock clearence sale</button>'
        document.getElementById("fifth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Winter sale</button>'
    }

    const op2 = async () => {
        document.getElementById("first").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">product 1</button>'
        document.getElementById("second").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">product 2</button>'
        document.getElementById("third").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">product 3</button>'
        document.getElementById("fourth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">product 4</button>'
        document.getElementById("fifth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">product 5</button>'
    }

    const op3 = async () => {
        document.getElementById("first").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">mother bord</button>'
        document.getElementById("second").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">RAM</button>'
        document.getElementById("third").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">CPU</button>'
        document.getElementById("fourth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">GPU</button>'
        document.getElementById("fifth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Screen</button>'
    }

    const op4 = async () => {
        document.getElementById("first").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Windows</button>'
        document.getElementById("second").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Fast Boot</button>'
        document.getElementById("third").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Office 365</button>'
        document.getElementById("fourth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Teams</button>'
        document.getElementById("fifth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">CMD</button>'
    }

    const op5 = async () => {
        document.getElementById("first").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">BY Serial NO</button>'
        document.getElementById("second").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">By Bill</button>'
        document.getElementById("third").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">By Email</button>'
        document.getElementById("fourth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">By Shop</button>'
        document.getElementById("fifth").innerHTML = '<button style="background: none; border: none; width: 100%; color: white;">Home Service</button>'
    }

    click1.addEventListener('click', op1)
    click2.addEventListener('click', op2)
    click3.addEventListener('click', op3)
    click4.addEventListener('click', op4)
    click5.addEventListener('click', op5)
}, 1000);

