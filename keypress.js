exports.key={
    '0':7,
    '1':8,
    '2':9,
    '3':10,
    '4':11,
    '5':12,
    '6':13,
    '7':14,
    '8':15,
    '9':16,
    'a':29,
    'b':30,
    'c':31,
    'd':32,
    'e':33,
    'f':34,
    'g':35,
    'h':36,
    'i':37,
    'j':38,
    'k':39,
    'l':40,
    'm':41,
    'n':42,
    'o':43,
    'p':44,
    'q':45,
    'r':46,
    's':47,
    't':48,
    'u':49,
    'v':50,
    'w':51,
    'x':52,
    'y':53,
    'z':54,
    '@':77,
    '.':56
}
exports.KeyEvent = {
    enterText: async (client,text) =>{
        for(var i = 0; i < text.length; i++){

            let keyPress = this.key[text.charAt(i)];
            await client.pressKeyCode(keyPress);
        }
    }
}