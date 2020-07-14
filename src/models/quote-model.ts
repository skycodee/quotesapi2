import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Comment } from './comment-model';
import { Category } from "./category-model";

@Entity("quotes")
export class Quote {

    @PrimaryGeneratedColumn({
        name: "id"
    })
    id: number;

    @Column({
        name: "quote_text",
        nullable: false, 
        length: 500,
        type: "varchar"
    })
    quoteText: string;

    @Column({
        name: "quote_narrator",
        nullable: true,
        length: 100,
        type: 'varchar'
    })
    quoteNarrator: string;

    @Column({
        name: 'quote_date', 
        nullable: false,
        type: 'date'
    })
    quoteDate: Date;

    @OneToMany(type => Comment, comment => comment.quote)
    comments: Comment[];

    @ManyToMany(type => Category)
    @JoinTable({
        name: 'quotes_categories',
        joinColumns: [
            { name: 'quote_id' }
        ],
        inverseJoinColumns: [
            { name: 'category_id' }
        ]
    })
    categories: Category[];
}