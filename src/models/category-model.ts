import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Quote } from "./quote-model";

@Entity("categories")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name', 
        type: 'varchar',
        length: 200
    })
    name: string;

    @ManyToMany(type => Quote)
    @JoinTable({
        name: 'quotes_categories', 
        joinColumns: [
            { name: 'category_id' }
        ],
        inverseJoinColumns: [
            { name: 'quote_id' }
        ]
    })
    quotes: Quote[]; 

}