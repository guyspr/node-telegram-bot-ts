import { ICommand } from './ICommand';

export class Doekoe implements ICommand {
  command = /doekoe$|moneyz$/;
  help = "Displays when the money comes";
  usage = "Usage: /doekoe";

  private getDaysTillNextDay(day: number) {
    var today, nextDay, diff, days;
    today = new Date();
    nextDay = new Date(today.getFullYear(), today.getMonth(), day, today.getHours(), today.getHours(), today.getMinutes()+1);
    if(today.getDate() == day){
      return 0;
    }
    if(today.getTime() > nextDay.getTime()){
      nextDay.setMonth(nextDay.getMonth()+1);
    }
    diff = nextDay.getTime() - today.getTime();
    days = Math.round(Math.abs(diff/(1000*60*60*24)));
    return days;
  }

  // Implement the execute command
  exec(msg, reply): void {
    var respString = `Het aantal dagen kan licht afwijken!\r\n`;
    var sah = this.getDaysTillNextDay(8);
    var zorgToeslag = this.getDaysTillNextDay(20);
    var stufi = this.getDaysTillNextDay(24);
    if(sah == 0){
      respString += `\r\n*Salaris van studentaanhuis komt vandaag!*`;
    }else{
      respString += `\r\nSalaris van studentaanhuis komt over ${sah} dagen.`;
    }
    if(zorgToeslag == 0){
      respString += `\r\n*Zorgtoeslag komt vandaag!*`;
    }else{
      respString += `\r\nZorgtoeslag komt over ${zorgToeslag} dagen.`;
    }
    if(stufi == 0){
      respString += `\r\n*Stufi komt vandaag!*`;
    }else{
      respString += `\r\nStufi komt over ${stufi} dagen.`;
    }
    reply.markdown(respString);
  }
}
