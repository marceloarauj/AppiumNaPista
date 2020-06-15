const wdio = require("webdriverio");
const assert = require("assert");
const keyEvent = require("./keypress");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android 8",
    app: "app-release.apk",
    automationName: "UiAutomator2",
    autoGrantPermissions:true
  }
};

async function main () {
  const client = await wdio.remote(opts);
  const keyboard = keyEvent.KeyEvent;

  await client.pause(15000);

  let btnProximo = await client.$("//android.widget.Button[@text='Próximo']");
  await btnProximo.click();

  btnProximo = await client.$("//android.widget.Button[@text='Próximo']");
  await btnProximo.click();

  const btnComecar = await client.$("//android.widget.Button[@text='Vamos começar']");
  await btnComecar.click();

  const btnTenhoConta = await client.$("//android.view.View[@text='Já tenho conta']");
  await btnTenhoConta.click();

  const txtEmail = await client.$("//android.widget.EditText[@text='Seu e-mail']");
  const txtSenha = await client.$("//android.widget.EditText[@text='Senha']");

  await txtEmail.click();
  await client.pause(1000);
  await keyboard.enterText(client,"kleyton.nascimento@napista.com.br");

  await txtSenha.click();
  await client.pause(1000);
  await keyboard.enterText(client,"123qwe");

  const btnAcessarConta = await client.$("//android.widget.Button[@text='Acessar conta']");
  btnAcessarConta.click();

  await client.pause(10000);
  
  await client.deleteSession();

}
main();