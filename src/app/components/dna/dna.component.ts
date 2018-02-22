import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder , NgForm} from "@angular/forms";
import { DnaService } from '../../services/dna.service';

@Component({
  selector: 'app-dna',
  templateUrl: './dna.component.html',
  styleUrls: ['./dna.component.css']
})

export class DnaComponent implements OnInit {
  
  
  @ViewChild("sequence")
    public sequenceElementRef: ElementRef;    
  
  seqForm: FormGroup;
  sequence: string;
  seqArr= []; 
  dnaArr = [];
  mrnaArr = [];
  aminoArr = [];
  amino = [];
  aminoPrecentage={}
  total = 0;
  precentage:any;
  constructor(private fb: FormBuilder ){
    interface Person {
    firstName: string;
    lastName: string;
    } 
  }
   
public switcher:any = {
                "uuu":"phenylalanine", "uuc":"phenylalanine","uua":"leucine","uug":"leucine",
                "ucu":"serine","ucc":"serine","uca":"serine","ucg":"serine",
                "uau":"tyrosine","uac":"tyrosine","uaa":"stop","uag":"stop",
                "ugu":"cysteine", "ugc":"cysteine", "uga":"stop","ugg":"tryptophan",
                "cuu":"leucine","cuc":"leucine","cua":"leucine","cug":"leucine",
                "ccu":"proline","ccc":"proline","cca":"proline","ccg":"proline",
                "cau":"histidine","cac":"histidine","caa":"glutamine","cag":"glutamine",
                "cgu":"arginine","cgc":"arginine","cga":"arginine","cgg":"arginine",
                "auu":"isoleucine","auc":"isoleucine","aua":"isoleucine","aug":"methionine", 
                "acu":"threonine","acc":"threonine","aca":"threonine","acg":"threonine", 
                "aau":"asparagine","aac":"asparagine","aaa":"lysine","aag":"lysine", 
                "agu":"serine","agc":"serine","aga":"arginine","agg":"arginine", 
                "guu":"valine","guc":"valine","gua":"valine","gug":"valine",  
                "gcu":"alanine","gcc":"alanine","gca":"alanine","gcg":"alanine",  
                "gau":"aspartate","gac":"aspartate","gaa":"glutamate","gag":"glutamate",  
                "ggu":"glycine","ggc":"glycine","gga":"glycine","ggg":"glycine",              
                }  
   
  public pieChartLabels:string[] = [];
  public pieChartType:string = 'pie';
  public pieChartLegend:boolean = true;
  
  public pieChartData:number[] = [];
  ngOnInit(){
      
      this.seqForm = this.fb.group({
        sequence : new FormControl(),
      });
  }

  public pieChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
    
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
   
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.pieChartData));
    clone[0].data = data;
    this.pieChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  };
  
  public writeDna() {
     this.seqArr = []; 
     this.dnaArr =[];
     this.amino=[];
     this.aminoArr = [];
     let dna = this.seqForm.value;
     let str = dna.sequence;
     this.seqArr = str.split("");
     let res: string;
      
     for (let i in this.seqArr ){
       
         if (this.seqArr[i]=='a'){
            this.dnaArr.push({code:"a",templating:'t', rna:'a'});  
            
         }
         else if(this.seqArr[i]=="t"){
            this.dnaArr.push({code:"t",templating:'a', rna:'u'});
            
         }
         
         else if(this.seqArr[i]=="c"){
            this.dnaArr.push({code:"c",templating:'g', rna:'c'});
            

         }
         else if(this.seqArr[i]=="g"){
           this.dnaArr.push({code:"g",templating:'c', rna:'g'});
           
         } 
         else{
           console.log('error');
           break;
         }
        }
        console.log(this.dnaArr);
        console.log(this.dnaArr.length);
       
        var i = 0; 
        
        for (i; i< this.dnaArr.length-2; i+=3){   
             console.log(this.dnaArr[i]['rna']+ this.dnaArr[i+1]['rna']+ this.dnaArr[i+2]['rna'])         
             this.aminoArr.push(this.dnaArr[i]['rna']+ this.dnaArr[i+1]['rna']+ this.dnaArr[i+2]['rna']);             
        }
        
        this.aminoArr.sort();        
        let count:number = 1;
        let total:number = 0;
        for (let i = 0; i <= this.aminoArr.length-1; i++){
            let aminoname=(this.switcher[this.aminoArr[i]]);
            if (this.switcher[this.aminoArr[i+1]] == this.switcher[this.aminoArr[i]]){
               count=count+1
            }
            else
            {    
                 this.total = this.total + count;
                 this.amino.push({amount: count, name: aminoname});
                 count=1;
            }
          }  

          console.log(this.amino);
          console.log(total);
    }
    
    public aminoPrecetage(){
      this.pieChartLabels=[];
      this.pieChartData = [];
      console.log(this.total);
      // calculating the total amount of amino acid //
  
      for(let i=0; i< this.amino.length; i++){
          console.log(this.total);
          this.pieChartLabels.push(this.amino[i]['name']);
          this.pieChartData.push(this.amino[i]['amount']);             
            
        }
        
        console.log(this.pieChartLabels);
      
    } 
      
}
     
  
   

