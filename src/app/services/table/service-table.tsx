import supabase from "@/app/supabase/supabase";
import { error } from "console";

interface tableInformation {
    table?: string,
    data?: any,
    equals?: string,
    value_equals?: string,
}


// Insertar Tabla

export default async function insertTable({ table, data }: tableInformation) {
    if(table && data) {
        try {
            const { data: responseData, error } = await supabase.from(table).insert(data)
            
            const reponse = error ? error : true;

            console.debug(responseData)
            return reponse;
        }catch(error) {
        console.error(error)
       }
    }
};

// UpdateTable

export async function updateTable({ table, data, equals, value_equals }: tableInformation) {
    if(table && data && equals && value_equals) {
        try {
            const { data: responseData, error } = await supabase.from(table).update(data).eq(equals, value_equals)
            
            const reponse = error ? error : true;

            console.debug(responseData)
            return reponse;
        }catch(error) {
        console.error(error)
       }
    }
};


// FetchTable With Equals

export async function fetchTableEq({ table, equals, value_equals }: tableInformation) {

    if(table && equals && value_equals) {
        try {
            const { data: ResponseData, error } = await supabase.from(table).select('*').eq(equals, value_equals);

            console.debug(error);

            return ResponseData;
        }catch(error) {
            console.log(error)
        }
    }
}

// FetchTable Without Equals

export async function fetchTable({ table }: tableInformation) {
    if(table) {
        try {
        const { data: ResponseData, error } = await supabase.from(table).select('*');

        return ResponseData;
        }catch(error){
            console.error(error)
        }
    }
}