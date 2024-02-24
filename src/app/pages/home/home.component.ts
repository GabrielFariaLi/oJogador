import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StaticDataService } from '../../services/staticData.service';
import { Player, oJogador } from '../../../assets/interfaces/Interfaces';
import { Observable, map, startWith } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { flagData } from '../../services/flagsData';
import confetti from 'js-confetti';

export interface StateGroup {
  letter: string;
  names: string[];
}
interface FlagData {
  [key: string]: string;
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
    FormsModule,
  ],
  template: `
    <app-navbar></app-navbar>

    <div id="containerAutoCompleteGuessPlayer" class=" mb-4 mt-20 ">
      <form id="formGuessPlayer" [formGroup]="stateGuessPlayerForm">
        <mat-form-field appearance="outline">
          <mat-label>Quem é oJogador de hoje?</mat-label>
          <input
            type="text"
            matInput
            formControlName="stateGroupGuessPlayer"
            required
            (keyup.enter)="golSubmit()"
            [matAutocomplete]="autoGroupGuessPlayer"
          />
          <span
            (click)="
              golSubmit(); $event.preventDefault(); $event.stopPropagation()
            "
            matSuffix
            class="iconAutoComplete mr-4 material-symbols-outlined"
          >
            arrow_circle_right
          </span>
          <mat-autocomplete #autoGroupGuessPlayer="matAutocomplete">
            @for (group of stateGroupOptions | async; track group) {
            <mat-optgroup [label]="group.letter">
              @for (name of group.names; track name) {
              <mat-option [value]="name">{{ name }}</mat-option>
              }
            </mat-optgroup>
            }
          </mat-autocomplete>
        </mat-form-field>
      </form>
    </div>

    @if(oJogadorNacionalidadeFlag && oJogadorIdade){
    <div class=" infosTodayPlayer ">
      <div class="item"><img [src]="oJogadorNacionalidadeFlag" /></div>
      <div class="item">
        <span class="material-symbols-outlined"> barefoot </span>
      </div>
      <div class="item">{{ oJogadorIdade }}</div>
    </div>

    }

    <div class="guessesContainerMain">
      <div class="wrapperG">
        <div class="infoHeader">
          <div class="itemInfoHeader">
            <span class="material-symbols-outlined"> contact_support </span>
            Regras
          </div>
          <div class="itemInfoHeader">
            <span class="material-symbols-outlined"> emoji_flags </span>
            Desistir
          </div>
        </div>
        <div class="attemptsContainer">
          <span class="attemptsTried">{{ this.atempts.length }}</span> /
          <span class="attemptsTotal">8</span>
        </div>
        @for (atempt of this.atempts; track $index) {
        <div class="guessesTriedContainer">
          <div class="index">{{ $index + 1 }}</div>

          <span class="divider">-</span>
          <div class="name">{{ atempt.name }}</div>
          <div class="currentTeam">Braxil</div>
        </div>
        }
      </div>
    </div>

    <div class="my-4 mx-auto pastTeamsTodayPlayer">
      <div class="header linha"><span>Time</span><span>Ano</span></div>
      <div class="py-4 body">
        @for (transfer of transferenciasoJogador; track $index) {

        <div class="linha py-2">
          <span>{{ transfer.teamName }}</span
          ><span>{{ transfer.fromYear }}</span>
        </div>
        }
      </div>
    </div>
  `,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  stateGuessPlayerForm = this._formBuilder.group({
    stateGroupGuessPlayer: '',
  });

  stateGroups: StateGroup[] = [];

  stateGroupOptions!: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) {}

  staticDataServices = inject(StaticDataService);
  staticAllPlayers: Player[] = [];
  currentDate: Date = new Date();
  ngOnInit(): void {
    this.mountAutoCompleteInput();

    this.getOjogador();
  }

  mountAutoCompleteInput() {
    this.staticAllPlayers = this.staticDataServices.getStaticAllPlayer();

    this.stateGroups = this.generateStateGroups(this.staticAllPlayers);
    this.stateGroupOptions = this.stateGuessPlayerForm
      .get('stateGroupGuessPlayer')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this._filterGroup(value || ''))
      );
  }

  oJogadorDeHoje!: oJogador;
  oJogadorNacionalidadeFlag: string = '';
  oJogadorIdade: number = 0;
  transferenciasoJogador!: { teamName: string; fromYear: number }[];

  getOjogador() {
    this.oJogadorDeHoje = this.staticDataServices.getStaticViewPlayerResult();

    //flag
    const countryoJogadorDeHoje: string = this.oJogadorDeHoje.country;
    this.oJogadorNacionalidadeFlag =
      flagData[countryoJogadorDeHoje.toLowerCase() as keyof typeof flagData];

    //idade
    const oJogadorBirthDate = new Date(this.oJogadorDeHoje.birth_date);

    this.oJogadorIdade =
      this.currentDate.getFullYear() - oJogadorBirthDate.getFullYear();

    if (
      this.currentDate.getMonth() < oJogadorBirthDate.getMonth() ||
      (this.currentDate.getMonth() === oJogadorBirthDate.getMonth() &&
        this.currentDate.getDate() < oJogadorBirthDate.getDate())
    ) {
      this.oJogadorIdade--;
    }

    //transferencias

    // Step 1: Parse dates and sort the array
    const sortedTransfers = this.oJogadorDeHoje.transfers
      .map((transfer) => ({
        ...transfer,
        from: new Date(transfer.from), // Parse 'from' date strings to Date objects
      }))
      .sort((a, b) => a.from.getTime() - b.from.getTime()); // Sort by 'from' dates

    // Step 2: Map each element to extract team name and year from 'from' property
    this.transferenciasoJogador = sortedTransfers.map((transfer) => ({
      teamName: transfer.team.name,
      fromYear: transfer.from.getFullYear(),
    }));

    console.log(
      '🚀 ~ HomeComponent ~ this.transferenciasoJogador=sortedTransfers.map ~ this.transferenciasoJogador:',
      this.transferenciasoJogador
    );
  }

  private _filterGroup(value: string): StateGroup[] {
    console.log('🚀 ~ HomeComponent ~ _filterGroup ~ value:', value);
    this.stateGroups.map((group: StateGroup) => {
      console.log(group);
    });
    if (value) {
      return this.stateGroups
        .map((group) => ({
          letter: group.letter,
          names: _filter(group.names, value),
        }))
        .filter((group) => group.names.length > 0);
    }

    return this.stateGroups;
  }

  private generateStateGroups(players: Player[]): StateGroup[] {
    const groups: StateGroup[] = [];

    players.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter: string | undefined;
    let currentGroup: string[] = [];

    players.forEach((player) => {
      const firstLetter = player.name.charAt(0).toUpperCase();

      if (firstLetter !== currentLetter) {
        if (currentLetter !== undefined) {
          groups.push({ letter: currentLetter, names: currentGroup });
        }
        currentLetter = firstLetter;
        currentGroup = [];
      }

      currentGroup.push(player.name);
    });

    if (currentLetter !== undefined) {
      groups.push({ letter: currentLetter, names: currentGroup });
    }

    return groups;
  }
  atempts: { name: string }[] = [];
  golSubmit() {
    console.log(this.stateGuessPlayerForm.value);
    console.log(this.oJogadorDeHoje);

    if (
      this.stateGuessPlayerForm.value.stateGroupGuessPlayer ===
      this.oJogadorDeHoje.name
    ) {
      console.log('parabains');

      // Create an Audio object with the path to your audio file
      let audio = new Audio('/assets/audios/PARABAINS.mp3');

      // Play the audio
      audio.play();
      // Trigger confetti animation
      const jsConfetti = new confetti();

      jsConfetti.addConfetti({ emojis: ['🍆', '💦'] });
    } else {
      this.atempts.push({
        name: this.stateGuessPlayerForm.value.stateGroupGuessPlayer as string,
      });

      if (this.atempts.length === 8) {
        console.log(this.atempts.length);
        let audio = new Audio('/assets/audios/vcehburro.mp3');

        audio.play();
      }
      console.log(
        '🚀 ~ HomeComponent ~ golSubmit ~  this.atempts:',
        this.atempts
      );
    }
  }
}
