class userRegister {
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
        return `${this._fName} \n${this._lName} \n${this._email} \n${this._weight} \n${this._height} \n${this._gender} \n${this._birthdate} `;
    }


}









const nuk = new userRegister('inw49','god teir','nukinwze@gen.com','1234',50,200,'male','120343');
console.log(nuk.userProfile);
