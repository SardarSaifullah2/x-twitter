export interface user{
    passion: string;
    _id? : string ;
    id? : string;
    email? : string;
    name? : string ;
    username? : string ;
    bio? : string ;
    location? : string ;
    image? : string ;
    emailVerified?: boolean | null ;
    profileBanner?: string ;
    dob? : Date;
    createdAt? : Date ;
    updatedAt? : Date;
}

export interface PostInt{
    profileBanner?: any;
    image?: string ;
    _id : string ;
    body : string ;
    userId : user ;
    likeId : string[] ;
    parent : PostInt[] | string[] ;
    createdAt? : Date ;
    updatedAt? : Date;
    comment: any[]
}

export interface ModelStateInt{
    isOpen : boolean ;
    onClose : () => void;
    onOpen : () => void;
    Username? : string;
    PostId? : string;
    setUsername? :(newText : string ) => void ;
    setPostId? : (newText : string ) => void ;
}