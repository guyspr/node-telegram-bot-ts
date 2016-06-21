export interface ICommand{
  command: RegExp;
  help: string;
  exec(msg, reply): void;
}