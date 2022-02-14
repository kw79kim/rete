import { Input } from './input';
import { Output } from './output';

export class Connection {

    output: Output;
    input: Input;
    dataType: string = '';
    data: unknown = {};

    constructor(output: Output, input: Input, dataType: string) {
        this.output = output;
        this.input = input;
        this.data = {};
        this.dataType = dataType;

        this.input.addConnection(this);
    }

    remove() {
        this.input.removeConnection(this);
        this.output.removeConnection(this);
    }
}