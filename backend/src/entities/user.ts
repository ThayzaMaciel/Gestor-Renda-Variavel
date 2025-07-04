export type UserProps = {
    id: number;
    name: string;
    email: string;
    commission_percentage: number;
}

export class User {
    private constructor(readonly props: UserProps) {}

        public static create(name: string, email: string) {
            return new User({
                id: 0,
                name,
                email,
                commission_percentage: 0,
            })
        }

         public get id(){
            return this.props.id
        }

         public get name(){
            return this.props.name
        }

        public get email(){
                return this.props.email
        }
    
        public get commission_percentage(){
                return this.props.commission_percentage
        }
    
        public set commission_percentage(value: number) {
                this.props.commission_percentage = value;
            
        }
    }
