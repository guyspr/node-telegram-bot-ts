export interface ICommand{
  command: RegExp;
  help: string;
  usage?: string;
  exec(msg, reply): void;
}