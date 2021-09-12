import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { COLORS } from './color.model';
import { Product } from './product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private products: Product[] = [
        {
            id: 1,
            title: "Premium Denim Women's Hidden",
            shortDescription: 'product description',
            longDescription:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non pretium odio. In quis sapien eget urna interdum pellentesque quis congue tellus. Etiam mattis neque ac condimentum aliquam. Praesent hendrerit tincidunt metus, quis suscipit dolor. Quisque blandit, erat eu dapibus aliquam, lorem felis imperdiet mauris, quis auctor dolor ex at lacus. Cras tincidunt lacus at ante hendrerit accumsan. Pellentesque id dui vitae ex tempor viverra id id urna. Morbi congue dolor justo, ac aliquet purus tempus id. Integer neque felis, blandit vitae venenatis quis, volutpat et sapien. Vestibulum risus eros, congue sit amet odio eu, viverra lacinia nunc.</p><p>Donec vel semper velit, vitae rhoncus elit. Praesent feugiat tempor nibh, a tristique neque ornare nec. Proin placerat rutrum elit a mollis. Aenean dignissim gravida interdum. Aenean non ipsum aliquam, porta mi vel, fermentum justo. Maecenas eleifend nulla sit amet justo vehicula dignissim. Aenean suscipit consectetur ex a posuere. Quisque ac ligula eget tellus congue venenatis id id lacus. Praesent vitae leo porttitor, bibendum massa ac, pulvinar metus. Vestibulum venenatis iaculis arcu, in tincidunt felis consectetur id. Praesent nunc urna, sagittis vitae faucibus sed, auctor condimentum lorem. Sed efficitur eros eu iaculis posuere. Mauris risus justo, efficitur aliquam tellus sed, dignissim pulvinar risus. Aenean vel elit tortor. Donec tellus nunc, vehicula viverra luctus eget, egestas sed ante. Suspendisse ac tortor at mauris mattis iaculis.</p>',
            price: 179,
            promotion: 15,
            image: 'pi4.jpg',
            color: COLORS.BLACK,
        },
        {
            id: 2,
            title: "Premium Denim Women's Hidden",
            shortDescription: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
            longDescription:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non pretium odio. In quis sapien eget urna interdum pellentesque quis congue tellus. Etiam mattis neque ac condimentum aliquam. Praesent hendrerit tincidunt metus, quis suscipit dolor. Quisque blandit, erat eu dapibus aliquam, lorem felis imperdiet mauris, quis auctor dolor ex at lacus. Cras tincidunt lacus at ante hendrerit accumsan. Pellentesque id dui vitae ex tempor viverra id id urna. Morbi congue dolor justo, ac aliquet purus tempus id. Integer neque felis, blandit vitae venenatis quis, volutpat et sapien. Vestibulum risus eros, congue sit amet odio eu, viverra lacinia nunc.</p><p>Donec vel semper velit, vitae rhoncus elit. Praesent feugiat tempor nibh, a tristique neque ornare nec. Proin placerat rutrum elit a mollis. Aenean dignissim gravida interdum. Aenean non ipsum aliquam, porta mi vel, fermentum justo. Maecenas eleifend nulla sit amet justo vehicula dignissim. Aenean suscipit consectetur ex a posuere. Quisque ac ligula eget tellus congue venenatis id id lacus. Praesent vitae leo porttitor, bibendum massa ac, pulvinar metus. Vestibulum venenatis iaculis arcu, in tincidunt felis consectetur id. Praesent nunc urna, sagittis vitae faucibus sed, auctor condimentum lorem. Sed efficitur eros eu iaculis posuere. Mauris risus justo, efficitur aliquam tellus sed, dignissim pulvinar risus. Aenean vel elit tortor. Donec tellus nunc, vehicula viverra luctus eget, egestas sed ante. Suspendisse ac tortor at mauris mattis iaculis.</p>',
            price: 179,
            promotion: 15,
            image: 'pi.jpg',
            color: COLORS.YELLOW,
        },
        {
            id: 3,
            title: "Premium Denim Women's Hidden",
            shortDescription: 'product description',
            longDescription:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non pretium odio. In quis sapien eget urna interdum pellentesque quis congue tellus. Etiam mattis neque ac condimentum aliquam. Praesent hendrerit tincidunt metus, quis suscipit dolor. Quisque blandit, erat eu dapibus aliquam, lorem felis imperdiet mauris, quis auctor dolor ex at lacus. Cras tincidunt lacus at ante hendrerit accumsan. Pellentesque id dui vitae ex tempor viverra id id urna. Morbi congue dolor justo, ac aliquet purus tempus id. Integer neque felis, blandit vitae venenatis quis, volutpat et sapien. Vestibulum risus eros, congue sit amet odio eu, viverra lacinia nunc.</p><p>Donec vel semper velit, vitae rhoncus elit. Praesent feugiat tempor nibh, a tristique neque ornare nec. Proin placerat rutrum elit a mollis. Aenean dignissim gravida interdum. Aenean non ipsum aliquam, porta mi vel, fermentum justo. Maecenas eleifend nulla sit amet justo vehicula dignissim. Aenean suscipit consectetur ex a posuere. Quisque ac ligula eget tellus congue venenatis id id lacus. Praesent vitae leo porttitor, bibendum massa ac, pulvinar metus. Vestibulum venenatis iaculis arcu, in tincidunt felis consectetur id. Praesent nunc urna, sagittis vitae faucibus sed, auctor condimentum lorem. Sed efficitur eros eu iaculis posuere. Mauris risus justo, efficitur aliquam tellus sed, dignissim pulvinar risus. Aenean vel elit tortor. Donec tellus nunc, vehicula viverra luctus eget, egestas sed ante. Suspendisse ac tortor at mauris mattis iaculis.</p>',
            price: 179,
            promotion: 15,
            image: 'pi5.jpg',
            color: COLORS.ORANGE,
        },
        {
            id: 4,
            title: "Premium Denim Women's Hidden",
            shortDescription: 'product description',
            longDescription:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non pretium odio. In quis sapien eget urna interdum pellentesque quis congue tellus. Etiam mattis neque ac condimentum aliquam. Praesent hendrerit tincidunt metus, quis suscipit dolor. Quisque blandit, erat eu dapibus aliquam, lorem felis imperdiet mauris, quis auctor dolor ex at lacus. Cras tincidunt lacus at ante hendrerit accumsan. Pellentesque id dui vitae ex tempor viverra id id urna. Morbi congue dolor justo, ac aliquet purus tempus id. Integer neque felis, blandit vitae venenatis quis, volutpat et sapien. Vestibulum risus eros, congue sit amet odio eu, viverra lacinia nunc.</p><p>Donec vel semper velit, vitae rhoncus elit. Praesent feugiat tempor nibh, a tristique neque ornare nec. Proin placerat rutrum elit a mollis. Aenean dignissim gravida interdum. Aenean non ipsum aliquam, porta mi vel, fermentum justo. Maecenas eleifend nulla sit amet justo vehicula dignissim. Aenean suscipit consectetur ex a posuere. Quisque ac ligula eget tellus congue venenatis id id lacus. Praesent vitae leo porttitor, bibendum massa ac, pulvinar metus. Vestibulum venenatis iaculis arcu, in tincidunt felis consectetur id. Praesent nunc urna, sagittis vitae faucibus sed, auctor condimentum lorem. Sed efficitur eros eu iaculis posuere. Mauris risus justo, efficitur aliquam tellus sed, dignissim pulvinar risus. Aenean vel elit tortor. Donec tellus nunc, vehicula viverra luctus eget, egestas sed ante. Suspendisse ac tortor at mauris mattis iaculis.</p>',
            price: 179,
            promotion: 15,
            image: 'pi6.jpg',
            color: COLORS.PRUNE,
        },
        {
            id: 5,
            title: "Premium Denim Women's Hidden",
            shortDescription: 'product description',
            longDescription:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non pretium odio. In quis sapien eget urna interdum pellentesque quis congue tellus. Etiam mattis neque ac condimentum aliquam. Praesent hendrerit tincidunt metus, quis suscipit dolor. Quisque blandit, erat eu dapibus aliquam, lorem felis imperdiet mauris, quis auctor dolor ex at lacus. Cras tincidunt lacus at ante hendrerit accumsan. Pellentesque id dui vitae ex tempor viverra id id urna. Morbi congue dolor justo, ac aliquet purus tempus id. Integer neque felis, blandit vitae venenatis quis, volutpat et sapien. Vestibulum risus eros, congue sit amet odio eu, viverra lacinia nunc.</p><p>Donec vel semper velit, vitae rhoncus elit. Praesent feugiat tempor nibh, a tristique neque ornare nec. Proin placerat rutrum elit a mollis. Aenean dignissim gravida interdum. Aenean non ipsum aliquam, porta mi vel, fermentum justo. Maecenas eleifend nulla sit amet justo vehicula dignissim. Aenean suscipit consectetur ex a posuere. Quisque ac ligula eget tellus congue venenatis id id lacus. Praesent vitae leo porttitor, bibendum massa ac, pulvinar metus. Vestibulum venenatis iaculis arcu, in tincidunt felis consectetur id. Praesent nunc urna, sagittis vitae faucibus sed, auctor condimentum lorem. Sed efficitur eros eu iaculis posuere. Mauris risus justo, efficitur aliquam tellus sed, dignissim pulvinar risus. Aenean vel elit tortor. Donec tellus nunc, vehicula viverra luctus eget, egestas sed ante. Suspendisse ac tortor at mauris mattis iaculis.</p>',
            price: 179,
            promotion: 15,
            image: 'pi4.jpg',
            color: COLORS.PURPLE,
        },
        {
            id: 6,
            title: "Premium Denim Women's Hidden",
            shortDescription: 'product description',
            longDescription:
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non pretium odio. In quis sapien eget urna interdum pellentesque quis congue tellus. Etiam mattis neque ac condimentum aliquam. Praesent hendrerit tincidunt metus, quis suscipit dolor. Quisque blandit, erat eu dapibus aliquam, lorem felis imperdiet mauris, quis auctor dolor ex at lacus. Cras tincidunt lacus at ante hendrerit accumsan. Pellentesque id dui vitae ex tempor viverra id id urna. Morbi congue dolor justo, ac aliquet purus tempus id. Integer neque felis, blandit vitae venenatis quis, volutpat et sapien. Vestibulum risus eros, congue sit amet odio eu, viverra lacinia nunc.</p><p>Donec vel semper velit, vitae rhoncus elit. Praesent feugiat tempor nibh, a tristique neque ornare nec. Proin placerat rutrum elit a mollis. Aenean dignissim gravida interdum. Aenean non ipsum aliquam, porta mi vel, fermentum justo. Maecenas eleifend nulla sit amet justo vehicula dignissim. Aenean suscipit consectetur ex a posuere. Quisque ac ligula eget tellus congue venenatis id id lacus. Praesent vitae leo porttitor, bibendum massa ac, pulvinar metus. Vestibulum venenatis iaculis arcu, in tincidunt felis consectetur id. Praesent nunc urna, sagittis vitae faucibus sed, auctor condimentum lorem. Sed efficitur eros eu iaculis posuere. Mauris risus justo, efficitur aliquam tellus sed, dignissim pulvinar risus. Aenean vel elit tortor. Donec tellus nunc, vehicula viverra luctus eget, egestas sed ante. Suspendisse ac tortor at mauris mattis iaculis.</p>',
            price: 179,
            promotion: 15,
            image: 'pi4.jpg',
            color: COLORS.PINK,
        },
    ];
    private readonly products$ = of(this.products);

    constructor() {}

    getAllProducts(): Observable<Product[]> {
        return this.products$;
    }

    getProductById(productId: number): Observable<Product> {
        return this.products$.pipe(map((products) => products.find((product) => product.id === productId)));
    }
}
