import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ComingSoonClassicComponent } from 'app/modules/admin/pages/coming-soon/classic/coming-soon.component';
import { ComingSoonModernComponent } from 'app/modules/admin/pages/coming-soon/modern/coming-soon.component';
import { ComingSoonModernReversedComponent } from 'app/modules/admin/pages/coming-soon/modern-reversed/coming-soon.component';
import { ComingSoonSplitScreenComponent } from 'app/modules/admin/pages/coming-soon/split-screen/coming-soon.component';
import { ComingSoonSplitScreenReversedComponent } from 'app/modules/admin/pages/coming-soon/split-screen-reversed/coming-soon.component';
import { ComingSoonFullscreenComponent } from 'app/modules/admin/pages/coming-soon/fullscreen/coming-soon.component';
import { ComingSoonFullscreenReversedComponent } from 'app/modules/admin/pages/coming-soon/fullscreen-reversed/coming-soon.component';

const routes: Routes = [
    {
        path     : 'classic',
        component: ComingSoonClassicComponent
    },
    {
        path     : 'modern',
        component: ComingSoonModernComponent
    },
    {
        path     : 'modern-reversed',
        component: ComingSoonModernReversedComponent
    },
    {
        path     : 'split-screen',
        component: ComingSoonSplitScreenComponent
    },
    {
        path     : 'split-screen-reversed',
        component: ComingSoonSplitScreenReversedComponent
    },
    {
        path     : 'fullscreen',
        component: ComingSoonFullscreenComponent
    },
    {
        path     : 'fullscreen-reversed',
        component: ComingSoonFullscreenReversedComponent
    }
];

@NgModule({
    declarations: [
        ComingSoonClassicComponent,
        ComingSoonModernComponent,
        ComingSoonModernReversedComponent,
        ComingSoonFullscreenComponent,
        ComingSoonFullscreenReversedComponent,
        ComingSoonSplitScreenComponent,
        ComingSoonSplitScreenReversedComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class ComingSoonModule
{
}
