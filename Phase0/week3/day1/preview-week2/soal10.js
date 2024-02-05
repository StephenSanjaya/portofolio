class Mobil{       
    constructor(name, price, color, gasType, wheels){
        this.name = name;
        this.price = price;
        this.color = color;
        this.gasType = gasType;
        this.wheels = wheels;
    }

    tampilkanSpesifikasi(){       
        return `Mobil saya bermerek ${this.name} dengan harga ${this.price} rupiah, berwarna ${this.color}, bensinnya ${this.gasType}, dan beroda ${this.wheels}`;
    }
    
    jualMobil(){      
        return "harga jual mobil = " + String(this.price - (this.price * 0.2));
    }
}

//TEST CASES

const hando = new Mobil('Hando', 300000000, 'merah', 'solar', 4);

console.log(hando.tampilkanSpesifikasi());
console.log(hando.jualMobil());