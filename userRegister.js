class UserRegister {
    constructor(fName,lName,email,password,weight,height,gender,birthdate){
        this._fName = fName;
        this._lName = lName;
        this._email = email;
        this._password = password;
        this._weight = weight;
        this._height = height;
        this._gender = gender;
        this._birthdate = birthdate;
        this._image = 0;
    }


    get userProfile() {
        return `
            First Name: ${this._fName} 
            Last Name: ${this._lName} 
            Email: ${this._email} 
            Weight: ${this._weight} 
            Height: ${this._height} 
            Gender: ${this._gender} 
            Birthdate: ${this._birthdate} 
        `;
    }


}


const nuk = new userRegister('inw49','god teir','nukinwze@gen.com','1234',50,200,'male','120343');
console.log(nuk.userProfile);
